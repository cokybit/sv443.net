function redirect(redirectURL) {
    try {
        setTimeout(function () {
            window.location.replace(redirectURL);
        }, 2000);
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