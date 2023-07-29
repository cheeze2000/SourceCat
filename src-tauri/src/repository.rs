pub mod branch;

use git2::Repository;

use crate::session::AppState;

#[tauri::command]
pub fn open_git_repository(state: AppState, path: &str) -> String {
	match Repository::open(path) {
		Ok(repo) => {
			let mut mutex_guard = state.repository.lock().unwrap();
			*mutex_guard = Some(repo);

			String::from("Successfully opened a repository")
		},
		Err(err) => format!("{err:?}"),
	}
}
