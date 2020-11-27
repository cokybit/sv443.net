"use-strict";

let langValues = {
    en: {
        games_title: "My Games",
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
        jslib_title: "Visit the JSLib Github repository",
        langapplier_title: "Visit the LangApplier Github repository",
        ttp_title: "Visit the TamperTubePlus Github repository",
        skribbl_title: "Visit the skribbl.io Github repository",
        text_island_title: "Play Text Island",
        jokeapi_title: "Visit the JokeAPI Website",
    },
    de: {
        games_title: "Meine Spiele",
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
        jslib_title: "Besuche die JSLib GitHub-Seite",
        langapplier_title: "Besuche die LangApplier GitHub-Seite",
        ttp_title: "Besuche die TamperTubePlus GitHub-Seite",
        skribbl_title: "Besuche die skribbl.io+ GitHub-Seite",
        text_island_title: "Spiele Text Island",
        jokeapi_title: "Besuche die JokeAPI Website",
    }
};

function otheronload() {
    if (!Cookies.get("theme_pref")) {
        setCookie("theme_pref", "light", 7);
        theme.select("light");
    } else if (Cookies.get("theme_pref") == "dark")
        theme.select("dark");
    else {
        theme.select("light");
    }
}

function indexonload() {
    loadchanges();
    if (Cookies.get("lang_pref") != "de" && Cookies.get("lang_pref") != "en") {
        Cookies.remove("lang_pref");
        reload();
    }
    if (!Cookies.get("theme_pref")) {
        setCookie("theme_pref", "light", 7);
        theme.select("light");
    } else if (Cookies.get("theme_pref") == "dark")
        theme.select("dark");
    else {
        theme.select("light");
    }

    if (window.location.search.substring(1).includes("epilepsy"))
        theme.epilepsy();
    if (window.location.search.substring(1).includes("wtf"))
        rbow({
            "keyCode": 16
        });
    if (window.location.search.substring(1).includes("spook_mode"))
        getspooked();
}

function reload() {
    window.location.reload();
}

function loadchanges() {
    if (getLang() == "de") {
        document.getElementById("privacypolicy").href = "/privacypolicy/de";
        document.getElementById("imprint").href = "/imprint/de";

        document.getElementById("github").title = langValues.de.github_title;
        document.getElementById("npm").title = langValues.de.npm_title;
        document.getElementById("itch").title = langValues.de.itch_title;
        document.getElementById("twitter").title = langValues.de.twitter_title;
        document.getElementById("email").title = langValues.de.email_title;
        document.getElementById("discord").title = langValues.de.discord_title;
        document.getElementById("jslib").title = langValues.de.jslib_title;
        document.getElementById("langapplier").title = langValues.de.langapplier_title;
        document.getElementById("ttp").title = langValues.de.ttp_title;
        document.getElementById("skribbl").title = langValues.de.skribbl_title;
        document.getElementById("jokeapi").title = langValues.de.jokeapi_title;
        document.getElementById("textisland").title = langValues.de.text_island_title;
        document.getElementById("gamestitle").innerHTML = langValues.de.games_title;
        document.getElementById("flappyswitch").title = langValues.de.flappy_switch_title;
        document.getElementById("langbtn").title = langValues.de.langbtn_title;
        document.getElementById("notif").querySelector("h3").textContent = langValues.de.email_copied;
        document.getElementById("privacypolicy").textContent = langValues.de.privacy_policy;
        document.getElementById("imprint").textContent = langValues.de.imprint;
    } else {
        document.getElementById("privacypolicy").href = "/privacypolicy/en";
        document.getElementById("imprint").href = "/imprint/en";

        document.getElementById("github").title = langValues.en.github_title;
        document.getElementById("npm").title = langValues.en.npm_title;
        document.getElementById("itch").title = langValues.en.itch_title;
        document.getElementById("twitter").title = langValues.en.twitter_title;
        document.getElementById("email").title = langValues.en.email_title;
        document.getElementById("discord").title = langValues.en.discord_title;
        document.getElementById("jslib").title = langValues.en.jslib_title;
        document.getElementById("langapplier").title = langValues.en.langapplier_title;
        document.getElementById("ttp").title = langValues.en.ttp_title;
        document.getElementById("skribbl").title = langValues.en.skribbl_title;
        document.getElementById("jokeapi").title = langValues.en.jokeapi_title;
        document.getElementById("textisland").title = langValues.en.text_island_title;
        document.getElementById("gamestitle").innerHTML = langValues.en.games_title;
        document.getElementById("flappyswitch").title = langValues.en.flappy_switch_title;
        document.getElementById("langbtn").title = langValues.en.langbtn_title;
        document.getElementById("notif").querySelector("h3").textContent = langValues.en.email_copied;
        document.getElementById("privacypolicy").textContent = langValues.en.privacy_policy;
        document.getElementById("imprint").textContent = langValues.en.imprint;
    }
}

function getLang() {
    var browserlang = navigator.language || navigator.userLanguage;
    if (Cookies.get("lang_pref"))
        return Cookies.get("lang_pref");
    if (browserlang.includes("de")) {
        setCookie("lang_pref", "de", 31);
        return "de";
    } else {
        setCookie("lang_pref", "en", 31);
        return "en";
    }
}

function switchLang() {
    var oldlang = getLang();
    if (oldlang == "en")
        setCookie("lang_pref", "de", 31);
    if (oldlang == "de")
        setCookie("lang_pref", "en", 31);
    reload();
}

const theme = new function () {
    this.change = function () {
        var oldtheme = document.body.dataset.theme;
        if (oldtheme == "dark") {
            var newtheme = "light";
        } else {
            var newtheme = "dark";
        }
        theme.select(newtheme);
    }
    this.select = function (newtheme) {
        setCookie("theme_pref", newtheme, 7);
        if (newtheme == "light") {
            if (document.getElementsByClassName("ph-moon")[0]) {
                document.getElementsByClassName("ph-moon")[0].classList.add("ph-sun");
                document.getElementsByClassName("ph-moon")[0].classList.remove("ph-moon");
                document.getElementById("cloudflare").querySelector("img").src = "resources/images/cloudflare-light.svg";
            }
        } else {
            if (document.getElementsByClassName("ph-sun")[0]) {
                document.getElementsByClassName("ph-sun")[0].classList.add("ph-moon");
                document.getElementsByClassName("ph-sun")[0].classList.remove("ph-sun");
                document.getElementById("cloudflare").querySelector("img").src = "resources/images/cloudflare-dark.svg";
            }
        }
        document.body.dataset.theme = newtheme;
    }
    this.epilepsy = function () {
        setInterval(theme.change, 250);
    }
    this.spooky = function () {
        document.body.dataset.theme = "spooky";
    }
}

function copyemail() {
    var text = atob("Y29udGFjdEBzdjQ0My5uZXQ=");
    var copyelem = document.createElement("textarea");
    copyelem.id = "copy";
    copyelem.innerHTML = text;
    document.body.appendChild(copyelem);
    document.getElementById("copy").select();
    document.execCommand("copy");
    copyelem.remove();
    document.getElementById("notif").style.visibility = "visible";
    document.getElementById("notif").style.opacity = "1";
    setTimeout(() => {
        document.getElementById("notif").style.opacity = "0";
        document.getElementById("notif").style.visibility = "hidden";
    }, 2000);
}

var donce = false;
function rbow(e) {
    if (e.keyCode == 16 && !donce) {
        donce = true;
        document.getElementById("title").dataset.disco = "true";
        let stel = document.createElement("style");
        stel.innerHTML = "*{transform:rotate(1900deg);transition:transform 1000s linear;}";
        document.head.appendChild(stel);
    }
}

function getspooked() {
    theme.spooky();
    var audio = new Audio("resources/audio/spooktune.mp3");
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

    document.getElementById("title").innerHTML = "🎃 Spook443 🎃";
}

function setCookie(key, value, expires) {
    Cookies.set(key, value, {
        expires: expires,
        SameSite: "Strict"
    })
}
