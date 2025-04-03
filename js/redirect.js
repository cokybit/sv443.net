function redirect(redirectURL, time = 1000) {
    try {
        setTimeout(function () {
            window.location.replace(redirectURL);
        }, time);
    }
    catch (err) {
        try {
            window.location.href = redirectURL;
        }
        catch (err2) {
            window.alert(`Couldn't automatically redirect - Please visit this link manually: ${redirectURL}`);
        }
    }
}
