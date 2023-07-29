import { invoke } from "@tauri-apps/api";
import { onMount } from "solid-js";

import { useRef } from "~/utils/useRef";

const branches = useRef<string[]>([]);

async function init() {
	const res: string[] = await invoke("get_branches");
	branches(res);
}

function Branch() {
	onMount(init);

	return (
		<div>
			{JSON.stringify(branches())}
		</div>
	);
}

export default Branch;
