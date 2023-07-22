import { useProperty } from "~/utils/useProperty";

const name = useProperty<string>("git.user.name");
const email = useProperty<string>("git.user.email");

function logout() {
	name("");
	email("");
}

function Home() {
	return (
		<div class="flex justify-end items-center">
			<div class="flex flex-col items-end p-6">
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
		</div>
	);
}

export default Home;
