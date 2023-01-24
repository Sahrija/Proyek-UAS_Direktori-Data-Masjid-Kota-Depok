// Toggles the "dark-mode" class
function toggleDarkMode(state) {
    document.documentElement.classList.toggle("dark-mode", state);
    darkModeState = state;
}

// Initial setting
toggleDarkMode(localStorage.getItem("dark-mode") == "true");