"use-strict";


const theme = Object.freeze({
    change: () => {
        if(Cookies.get("cookie_consent") != "true")
        {
            document.getElementById("cookie-consent").style.display = "flex";
            document.getElementById("cookie-consent").classList.add("fade-to-the-right");
        }
        var oldtheme = document.body.dataset.theme;
        if (oldtheme == "dark")
        {
            var newtheme = "light";
            document.getElementById("themebtn").title = "Switch to dark theme";
        }
        else
        {
            var newtheme = "dark";
            document.getElementById("themebtn").title = "Switch to light theme";
        }
        theme.select(newtheme);
    },
    select: (newtheme) => {
        if(Cookies.get("cookie_consent") == "true")
            setCookie("theme_pref", newtheme, 7);
        if(newtheme == "dark")
        {
            if(document.getElementsByClassName("ph-moon")[0])
            {
                document.getElementsByClassName("ph-moon")[0].classList.add("ph-sun");
                document.getElementsByClassName("ph-moon")[0].classList.remove("ph-moon");
            }
        }
        else
        {
            if(document.getElementsByClassName("ph-sun")[0])
            {
                document.getElementsByClassName("ph-sun")[0].classList.add("ph-moon");
                document.getElementsByClassName("ph-sun")[0].classList.remove("ph-sun");
            }
        }
        document.body.dataset.theme = newtheme;
    },
    epilepsy: () => {
        setInterval(theme.change, 250);
    },
    spooky: () => {
        document.body.dataset.theme = "spooky";
    },
    /** Applies the theme from the settings in the cookies, else applies the default theme (light) */
    apply: () => {
        const cookieConsent = Cookies.get("cookie-consent") == "true";
        const themePref = Cookies.get("theme_pref");

        if(!themePref && cookieConsent)
            setCookie("theme_pref", "light", 7);
        else if(themePref == "dark")
            return theme.select("dark");

        return theme.select("light");
    }
});

function otheronload()
{
    theme.apply();
}

function indexonload()
{
    theme.apply();

    const queryStr = window.location.search.substring(1);
    const d = new Date();

    if (queryStr.includes("epilepsy"))
        theme.epilepsy();
    if (queryStr.includes("wtf"))
        rbow({
            "keyCode": 16
        });
    if(d.getMonth() == 9 && d.getDate() == 31 || queryStr.includes("spook_mode"))
        getspooked();

    const logo = document.querySelector("#logo");
    logo.addEventListener("dblclick", () => logo.classList.add("pride"));
}

function reload()
{
    window.location.reload();
}

function copyemail()
{
    var text = atob("Y29udGFjdEBzdjQ0My5uZXQ="); // anti crawler
    copyText(text);

    let notif = document.getElementById("notif");
    notif.classList.add("noselect");
    notif.style.backgroundColor = "#ddddee";
    notif.style.color = "#000";
    notif.querySelector("h3").textContent = "(E-Mail address copied to clipboard)";
    notif.style.visibility = "visible";
    notif.style.opacity = "1";

    setTimeout(() => {
        notif.style.opacity = "0";
        notif.style.visibility = "hidden";
    }, 2500);
}

async function copyText(text)
{
    await navigator.clipboard.writeText(text.toString());
}

var donce = false;
function rbow(e) {
    if (e.keyCode == 16 && !donce) {
        donce = true;
        document.getElementById("title").dataset.disco = "true";
        let stel = document.createElement("style");
        stel.innerHTML = "*{transform:rotate(2300deg);transition:transform 1000s linear;}";
        document.head.appendChild(stel);
    }
}

function getspooked()
{
    theme.spooky();
    var audio = new Audio("resources/audio/spooktune.mp3");
    audio.volume = 0.5;
    audio.play();
    audio.loop = true;

    let spook1 = document.createElement("img");
    spook1.style.height = "10em";
    spook1.src = "https://78.media.tumblr.com/828ab575b1894f3901ae7a05bb27f2cc/tumblr_n6hhknZQv91r2vz4uo1_400.gif"
    document.getElementsByTagName("header")[0].prepend(spook1);

    let spook2 = document.createElement("img");
    spook2.style.height = "10em";
    spook2.src = "https://i.kym-cdn.com/entries/icons/facebook/000/011/121/SKULL_TRUMPET_0-1_screenshot.jpg";
    document.getElementById("projects").appendChild(spook2);

    let spook3div = document.createElement("div");
    spook3div.style.textAlign = "center";
    let spook3 = document.createElement("img");
    spook3.style.height = "10em";
    spook3.src = "https://cdn03.plentymarkets.com/chg0wln2n7ix/item/images/102979/full/Jack-O-Lantern-Halloween-Kuerbis-Windlicht-21x19-c.jpg";
    spook3div.appendChild(spook3);
    document.getElementsByTagName("main")[0].append(spook3div);

    document.getElementById("title").innerHTML = "🎃 Spook443 Network 🎃";
}

function setCookie(key, value, expires)
{
    Cookies.set(key, value, {
        expires: expires,
        SameSite: "Strict"
    })
}

function consentGranted()
{
    document.getElementById("cookie-consent").style.display = "none";
    setCookie("cookie_consent", "true", 365);
    setCookie("theme_pref", document.body.dataset.theme, 31);
}

function consentDenied()
{
    document.getElementById("cookie_consent").style.display = "none";
}
