"use-strict";

let langValues = {
    en: {
        games_title: "Games",
        email_copied: "(E-Mail address copied to clipboard)",
        about_title: "About me:",
        github_title: "Sv443 on Github",
        npm_title: "Sv443 on npm",
        twitter_title: "Sv443 on Twitter",
        itch_title: "Sv443 on itch.io",
        email_title: "Copies Sv443's E-Mail address to your clipboard",
        discord_title: "Join the Sv443 Network Discord server",
        flappy_switch_title: "Play Flappy Switch",
        langbtn_title: "Wecshle zu Deutsch",
        privacy_policy: "Privacy Policy",
        imprint: "Legal Information",
        svcorelib_title: "Visit the SvCoreLib Github repository",
        langapplier_title: "Visit the LangApplier Github repository",
        ttp_title: "Visit the TamperTubePlus Github repository",
        skribbl_title: "Visit the skribbl.io Github repository",
        text_island_title: "Play Text Island",
        jokeapi_title: "Visit the JokeAPI Website",
    },
    de: {
        games_title: "Spiele",
        email_copied: "(E-Mail Adresse in die Zwischenablage kopiert)",
        about_title: "Über mich:",
        github_title: "Sv443 auf GitHub",
        npm_title: "Sv443 auf npm",
        twitter_title: "Sv443 auf Twitter",
        itch_title: "Sv443 auf itch.io",
        email_title: "Kopiert Sv443's E-Mail Adresse in deine Zwischenablage",
        discord_title: "Betrete den Discord-Server vom Sv443 Network",
        flappy_switch_title: "Spiele Flappy Switch",
        langbtn_title: "Switch to English",
        privacy_policy: "Datenschutzerklärung",
        imprint: "Impressum",
        svcorelib_title: "Besuche die SvCoreLib GitHub-Seite",
        langapplier_title: "Besuche die LangApplier GitHub-Seite",
        ttp_title: "Besuche die TamperTubePlus GitHub-Seite",
        skribbl_title: "Besuche die skribbl.io+ GitHub-Seite",
        text_island_title: "Spiele Text Island",
        jokeapi_title: "Besuche die JokeAPI Website",
    }
};

function otheronload() {
    // if (Cookies.get("cookie-consent") == "true") {
    //     if (!Cookies.get("theme_pref")) {
    //         setCookie("theme_pref", "light", 7);
    //         theme.select("light");
    //     } else 
    if(Cookies.get("theme_pref") == "dark")
    {
        theme.select("dark");
    }
    else {
        theme.select("light");
    }
}

function indexonload() {
    loadchanges();
    if (Cookies.get("cookie-consent") == "true") {
        if (!Cookies.get("theme_pref")) {
            setCookie("theme_pref", "light", 7);
            theme.select("light");
        } else if (Cookies.get("theme_pref") == "dark")
            theme.select("dark");
        else {
            theme.select("light");
        }
    }

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

function reload() {
    window.location.reload();
}

function loadchanges() {
    // if (getLang() == "de") {
    //     document.getElementById("privacypolicy").href = "./privacypolicy_de";
    //     document.getElementById("imprint").href = "./imprint_de";

    //     document.getElementById("github").title = langValues.de.github_title;
    //     document.getElementById("npm").title = langValues.de.npm_title;
    //     document.getElementById("itch").title = langValues.de.itch_title;
    //     document.getElementById("twitter").title = langValues.de.twitter_title;
    //     document.getElementById("email").title = langValues.de.email_title;
    //     document.getElementById("discord").title = langValues.de.discord_title;
    //     document.getElementById("svcorelib").title = langValues.de.svcorelib_title;
    //     document.getElementById("langapplier").title = langValues.de.langapplier_title;
    //     document.getElementById("ttp").title = langValues.de.ttp_title;
    //     document.getElementById("skribbl").title = langValues.de.skribbl_title;
    //     document.getElementById("jokeapi").title = langValues.de.jokeapi_title;
    //     document.getElementById("textisland").title = langValues.de.text_island_title;
    //     document.getElementById("gamestitle").innerHTML = langValues.de.games_title;
    //     document.getElementById("flappyswitch").title = langValues.de.flappy_switch_title;
    //     document.getElementById("langbtn").title = langValues.de.langbtn_title;
    //     document.getElementById("notif").querySelector("h3").textContent = langValues.de.email_copied;
    //     document.getElementById("privacypolicy").textContent = langValues.de.privacy_policy;
    //     document.getElementById("imprint").textContent = langValues.de.imprint;
    // } else {
    //     document.getElementById("privacypolicy").href = "./privacypolicy_en";
    //     document.getElementById("imprint").href = "./imprint_en";

    //     document.getElementById("github").title = langValues.en.github_title;
    //     document.getElementById("npm").title = langValues.en.npm_title;
    //     document.getElementById("itch").title = langValues.en.itch_title;
    //     document.getElementById("twitter").title = langValues.en.twitter_title;
    //     document.getElementById("email").title = langValues.en.email_title;
    //     document.getElementById("discord").title = langValues.en.discord_title;
    //     document.getElementById("svcorelib").title = langValues.en.svcorelib_title;
    //     document.getElementById("langapplier").title = langValues.en.langapplier_title;
    //     document.getElementById("ttp").title = langValues.en.ttp_title;
    //     document.getElementById("skribbl").title = langValues.en.skribbl_title;
    //     document.getElementById("jokeapi").title = langValues.en.jokeapi_title;
    //     document.getElementById("textisland").title = langValues.en.text_island_title;
    //     document.getElementById("gamestitle").innerHTML = langValues.en.games_title;
    //     document.getElementById("flappyswitch").title = langValues.en.flappy_switch_title;
    //     document.getElementById("langbtn").title = langValues.en.langbtn_title;
    //     document.getElementById("notif").querySelector("h3").textContent = langValues.en.email_copied;
    //     document.getElementById("privacypolicy").textContent = langValues.en.privacy_policy;
    //     document.getElementById("imprint").textContent = langValues.en.imprint;
    // }
}

function getLang() {
    var browserlang = navigator.language || navigator.userLanguage;
    if (Cookies.get("lang_pref"))
        return Cookies.get("lang_pref");
    if (Cookies.get("cookie-consent") == "true") {
        if (browserlang.includes("de")) {
            setCookie("lang_pref", "de", 31);
            return "de";
        } else {
            setCookie("lang_pref", "en", 31);
            return "en";
        }
    }
    return "en";
}

function switchLang() {
    if (Cookies.get("cookie-consent") != "true") {
        let notif = document.getElementById("notif");
        document.getElementById("cookie-consent").style.display = "flex";
        document.getElementById("cookie-consent").classList.add("fade-to-the-right");
        notif.style.backgroundColor = "#F17E7E";
        notif.style.color = "#931010";
        notif.style.borderColor = "#EF6C6C";
        notif.querySelector("h3").textContent = "Cookies need to be set to change the language";
        notif.style.visibility = "visible";
        notif.style.opacity = "1";
        setTimeout(() => {
            notif.style.opacity = "0";
            notif.style.visibility = "hidden";
        }, 2500);
        return;
    }
    var oldlang = getLang();
    if (Cookies.get("cookie-consent") == "true") {
        if (oldlang == "en")
            setCookie("lang_pref", "de", 31);
        if (oldlang == "de")
            setCookie("lang_pref", "en", 31);
    }
    reload();
}

const theme = {
    change: function () {
        if (Cookies.get("cookie-consent") != "true") {
            document.getElementById("cookie-consent").style.display = "flex";
            document.getElementById("cookie-consent").classList.add("fade-to-the-right");
        }
        var oldtheme = document.body.dataset.theme;
        if (oldtheme == "dark") {
            var newtheme = "light";
            document.getElementById("themebtn").title = "Switch to dark theme";
        } else {
            var newtheme = "dark";
            document.getElementById("themebtn").title = "Switch to light theme";
        }
        theme.select(newtheme);
    },
    select: function (newtheme) {
        if (Cookies.get("cookie-consent") == "true") {
            setCookie("theme_pref", newtheme, 7);
        }
        if (newtheme == "dark") {
            if (document.getElementsByClassName("ph-moon")[0]) {
                document.getElementsByClassName("ph-moon")[0].classList.add("ph-sun");
                document.getElementsByClassName("ph-moon")[0].classList.remove("ph-moon");
            }
        } else {
            if (document.getElementsByClassName("ph-sun")[0]) {
                document.getElementsByClassName("ph-sun")[0].classList.add("ph-moon");
                document.getElementsByClassName("ph-sun")[0].classList.remove("ph-sun");
            }
        }
        document.body.dataset.theme = newtheme;
    },
    epilepsy: function () {
        setInterval(theme.change, 250);
    },
    spooky: function () {
        document.body.dataset.theme = "spooky";
    }
}

function copyemail() {
    var text = atob("Y29udGFjdEBzdjQ0My5uZXQ="); // anti crawler
    copyText(text);

    let notif = document.getElementById("notif");
    notif.style.backgroundColor = "#cce5ff";
    notif.style.color = "#004085";
    notif.style.borderColor = "#b8daff";
    notif.querySelector("h3").textContent = getLang() == "en" ? langValues.en.email_copied : langValues.de.email_copied;
    notif.style.visibility = "visible";
    notif.style.opacity = "1";

    setTimeout(() => {
        notif.style.opacity = "0";
        notif.style.visibility = "hidden";
    }, 2500);
}

function copyText(text)
{
    var copyelem = document.createElement("textarea");
    copyelem.id = "copy";
    copyelem.innerHTML = text;
    document.body.appendChild(copyelem);
    document.getElementById("copy").select();
    document.execCommand("copy");
    copyelem.remove();
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

function getspooked() {
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

function setCookie(key, value, expires) {
    Cookies.set(key, value, {
        expires: expires,
        SameSite: "Strict"
    })
}

function consentGranted() {
    document.getElementById("cookie-consent").style.display = "none";
    setCookie("cookie-consent", "true", 365);
    setCookie("theme_pref", document.body.dataset.theme, 31);
}

function consentDenied() {
    document.getElementById("cookie-consent").style.display = "none";
}