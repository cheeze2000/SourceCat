import { useBind } from "~/utils/useBind";
import { useProperty } from "~/utils/useProperty";
import { useRef } from "~/utils/useRef";

const bind = useBind();

const name = useRef("");
const email = useRef("");

function handleSubmit(e: Event) {
	e.preventDefault();

	useProperty("git.user.name")(name());
	useProperty("git.user.email")(email());
}

function Login() {
	return (
		<div class="flex justify-center items-center h-full">
			<div class="p-6">
				<form
					onSubmit={handleSubmit}
					class="flex flex-col items-center gap-6"
				>
					<input
						use:bind={name}
						class="px-2 py-1 bg-transparent border-b outline-none"
						placeholder="Name"
					/>
					<input
						use:bind={email}
						class="px-2 py-1 bg-transparent border-b outline-none"
						placeholder="Email"
					/>
					<button class="px-3 py-1 w-fit rounded border border-secondary">
						Log in
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
