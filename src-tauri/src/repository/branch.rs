use crate::session::AppState;

#[tauri::command]
pub fn get_branches(state: AppState) -> Vec<String> {
	let mut branches = Vec::new();

	let repo_opt = &*state.repository.lock().unwrap();
	let Some(repo) = repo_opt.as_ref() else {
		return branches;
	};

	for res in repo.branches(None).unwrap() {
		if let Ok((branch, _)) = res {
			let name = branch.name().unwrap().unwrap();

			branches.push(String::from(name));
		}
	}

	branches
}
