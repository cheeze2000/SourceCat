import { dialog, invoke } from "@tauri-apps/api";

import { useProperty } from "~/utils/useProperty";

const repoUrl = useProperty<string>("git.repo.url");

async function openRepo() {
	const path = await dialog.open({
		directory: true,
	}) as string;

	if (!path) {
		return;
	}

	const success: boolean = await invoke("open_git_repository", { path });

	if (success) {
		repoUrl(path);
	} else {
		repoUrl("");
	}
}

function RepoSelector() {
	return (
		<button
			onClick={openRepo}
		>
			open a repository!
		</button>
	);
}

export default RepoSelector;
