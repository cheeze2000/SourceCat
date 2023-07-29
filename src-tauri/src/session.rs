use git2::Repository;
use std::sync::Mutex;
use tauri::State;

pub type AppState<'a> = State<'a, Session>;

pub struct Session {
	pub repository: Mutex<Option<Repository>>,
}

impl Session {
	pub fn new() -> Self {
		Self {
			repository: Mutex::new(None),
		}
	}
}
