export function changeTheme(theme) {
    const cssRoot = document.querySelector(':root')
    if(theme === "light") {
        cssRoot.style.setProperty("--color-background", "#f7f7f7")
        cssRoot.style.setProperty("--color-card", "#fdfdfd")
        cssRoot.style.setProperty("--color-base", "#ffffff")
        cssRoot.style.setProperty("--color-card-light", "#f0f0f0")
        cssRoot.style.setProperty("--color-text", "black")
        cssRoot.style.setProperty("--color-theme-indicator", "#dcb20d")
    } else {
        cssRoot.style.setProperty("--color-background", "#050505")
        cssRoot.style.setProperty("--color-card", "#090909")
        cssRoot.style.setProperty("--color-base", "black")
        cssRoot.style.setProperty("--color-card-light", "#1c1c1c")
        cssRoot.style.setProperty("--color-text", "#fbfbfb")
        cssRoot.style.setProperty("--color-theme-indicator", "#6a22fa")
    }
}