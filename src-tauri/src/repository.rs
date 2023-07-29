pub mod branch;

use git2::Repository;

use crate::session::AppState;

#[tauri::command]
pub fn open_git_repository(state: AppState, path: &str) -> bool {
	match Repository::open(path) {
		Ok(repo) => {
			let mut mutex_guard = state.repository.lock().unwrap();
			*mutex_guard = Some(repo);

			true
		},
		Err(_) => false,
	}
}
