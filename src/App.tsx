import { Show } from "solid-js";

import Home from "~/components/Home";
import Login from "~/components/Login";
import { useProperty } from "~/utils/useProperty";

const email = useProperty<string>("git.user.email");
const name = useProperty<string>("git.user.name");

function App() {
	return (
		<div class="w-screen h-screen">
			<Show
				when={name() && email()}
				fallback={<Login />}
			>
				<Home />
			</Show>
		</div>
	);
}

export default App;
