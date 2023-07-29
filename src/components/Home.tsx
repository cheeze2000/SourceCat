import { invoke } from "@tauri-apps/api";
import { Show, onMount } from "solid-js";

import { useProperty } from "~/utils/useProperty";
import { useRef } from "~/utils/useRef";
import Branch from "~/components/Branch";
import RepoSelector from "~/components/RepoSelector";

const repoUrl = useProperty<string>("git.repo.url");
const email = useProperty<string>("git.user.email");
const name = useProperty<string>("git.user.name");

const libVersion = useRef<string>("");

async function init() {
	const version: string = await invoke("get_libgit2_version");
	libVersion(version);
}

function logout() {
	repoUrl("");
	email("");
	name("");
}

function Home() {
	onMount(init);

	return (
		<div class="flex justify-center items-center h-full">
			<Show
				when={repoUrl()}
				fallback={<RepoSelector />}
			>
				<Branch />
			</Show>
			<div class="fixed flex flex-col items-end top-3 right-3">
				<span>
					Welcome, {name()}!
				</span>
				<span
					onClick={logout}
					class="underline cursor-pointer"
				>
					Log out
				</span>
			</div>
			<Show when={libVersion()}>
				<div class="fixed bottom-3 left-3">
					- Powered by libgit2 {libVersion()} -
				</div>
			</Show>
		</div>
	);
}

export default Home;
