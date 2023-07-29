// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod session;

use git2::Version;
use git2::opts::set_verify_owner_validation;

use crate::session::Session;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn get_libgit2_version() -> String {
	let (major, minor, rev) = Version::get().libgit2_version();
	format!("v{major}.{minor}.{rev}")
}

fn main() {
	unsafe {
		set_verify_owner_validation(false)
			.expect("error while running tauri application");
	}

	tauri::Builder::default()
		.manage(Session::new())
		.invoke_handler(tauri::generate_handler![
			get_libgit2_version,
		])
		.run(tauri::generate_context!())
		.expect("error while running tauri application");
}
