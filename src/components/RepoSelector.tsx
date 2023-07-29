import { dialog, invoke } from "@tauri-apps/api";

async function openRepo() {
	const path = await dialog.open({
		directory: true,
	}) as string;

	if (path) {
		const res = await invoke("open_git_repository", { path });
		console.log(res);
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
