function applyTheme()
{
    const theme = Cookies.get("theme_pref") || "light";

    if(theme)
        document.body.dataset.theme = theme;
}

document.addEventListener("DOMContentLoaded", () => {
    // applyTheme();
});
