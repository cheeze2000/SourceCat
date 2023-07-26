import { invoke } from "@tauri-apps/api";
import { Show, onMount } from "solid-js";

import { useProperty } from "~/utils/useProperty";
import { useRef } from "~/utils/useRef";

const name = useProperty<string>("git.user.name");
const email = useProperty<string>("git.user.email");

const libVersion = useRef<string>("");

async function init() {
	const version: string = await invoke("get_libgit2_version");
	libVersion(version);
}

function logout() {
	name("");
	email("");
}

function Home() {
	onMount(init);

	return (
		<div class="flex justify-end items-center">
			<div class="flex flex-col items-end p-3">
				<p>
					Welcome, {name()}!
				</p>
				<p>
					{email()}
				</p>
				<p
					onClick={logout}
					class="underline cursor-pointer"
				>
					Log out
				</p>
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
