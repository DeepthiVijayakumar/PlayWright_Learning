function launchBrowser(browser) {

    if (browser === "chrome") {
        console.log("Launching Chrome browser");
    }
    else if (browser === "firefox") {
        console.log("Launching Firefox browser");
    }
    else if (browser === "edge") {
        console.log("Launching Edge browser");
    }
    else {
        console.log("Please enter a valid browser name");
    }

}

function testType(test) {
    switch (test) { 

    case "smoke":
        console.log("Executing smoke test cases");
        break;  

    case "regression":
        console.log("Executing regression test cases");
        break;     

    case "sanity":
        console.log("Executing sanity test cases");
        break;  

    default:
        console.log("Running smoke test cases");
}
}
launchBrowser("chrome");
testType("default");