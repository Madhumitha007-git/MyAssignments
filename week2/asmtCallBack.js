

let browser = "Chrome";

function checkBrowserVersion(callback) {
    setTimeout(function () {
        callback(browser);
    }, 2000);
}

function displayBrowserVersion(browserVersion) {
    console.log("Browser version using callback: " + browserVersion);
}

checkBrowserVersion(displayBrowserVersion);