/**
 * @param {"mail"|"tel"} type
 */
function getSens(type)
{
    switch(type)
    {
    case "mail":
        return atob("Y29udGFjdEBzdjQ0My5uZXQ=");
    case "tel":
        return atob("KzQ5IDE3NiA3MzU1NDk4NQ==");
    case "addr":
        return atob("S+R0aGUtS29sbHdpdHotV2VnIDE1PGJyPjcwNTY5IFN0dXR0Z2FydDxicj5EZXV0c2NobGFuZA==");
    }
}

function insSens(clickText)
{
    /** @type {HTMLElement[]} */
    const elements = document.querySelectorAll(".insSens");

    for(const el of elements)
    {
        el.innerText = clickText || "Click to reveal";
        el.classList.add("mimica");
        el.classList.remove("insSens");

        el.addEventListener("click", () => {
            if(!el.dataset.type || el.dataset.type.length < 1)
                return;

            const txt = getSens(el.dataset.type);
            if(!txt) return;

            el.innerHTML = txt;
            el.classList.remove("mimica");
            el.dataset.type = "";
        });
    }
}
