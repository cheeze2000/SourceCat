import { createSignal } from "solid-js";

export type Ref<T> = (..._: T[]) => T;

export function useRef<T>(value: T): Ref<T> {
	const [state, setState] = createSignal(value);

	return function(...args: T[]) {
		if (args.length > 0) {
			setState(() => args[0]);
		}

		return state();
	};
}
