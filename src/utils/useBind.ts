import { createRenderEffect } from "solid-js";

import { Ref } from "~/utils/useRef";

declare module "solid-js" {
	namespace JSX {
		interface Directives {
			bind: Ref<any>,
		}
	}
}

function bind(el: HTMLInputElement, prop: () => Ref<string>) {
	const ref = prop();

	el.oninput = function() {
		ref(el.value);
	};

	createRenderEffect(() => el.value = ref());
}

export function useBind() {
	return bind;
}
