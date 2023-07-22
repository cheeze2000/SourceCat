import { createSignal } from "solid-js";

type PropertyKeys =
	| "git.user.email"
	| "git.user.name";

type Property<T> = (..._: T[]) => T;

const properties = new Map<PropertyKeys, unknown>;

export function useProperty<T>(key: PropertyKeys): Property<T> {
	if (properties.has(key)) {
		return properties.get(key) as Property<T>;
	}

	const item = localStorage.getItem(key);
	const value = item ? JSON.parse(item) : null;

	const [state, setState] = createSignal(value);

	const property = function(...args: T[]) {
		if (args.length > 0) {
			setState(() => args[0]);

			localStorage.setItem(key, JSON.stringify(state()));
		}

		return state();
	};

	properties.set(key, property);

	return property;
}
