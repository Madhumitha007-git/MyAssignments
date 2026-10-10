
// let str = "Malayalam";
let str="Madhu"

function checkPalindrome(str) {
    let characters = str.split("");
    let rev = "";

    // Reverse the string
    for (let i = characters.length - 1; i >= 0; i--) {
        rev = rev + characters[i];
    }

    console.log("Reversed string:", rev);

    // Check palindrome
    if (str === rev) {
        console.log(str + " is a palindrome");
      
    } else {
        console.log(str + " is not a palindrome");
        
    }
}

checkPalindrome(str);