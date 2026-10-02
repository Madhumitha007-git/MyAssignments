let testType="Automation"
function runTests(testType) {
    

switch (testType) {
    case "smoke":
        console.log("smoke");
        break;
    case "sanity":
        console.log("sanity");
        break;
    case "regression":
        console.log("regression");
        break;
    default:
        console.log("Smoke");
        break;
}
}
runTests(testType)

