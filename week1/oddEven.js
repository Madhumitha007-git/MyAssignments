/* Function isOddOrEven(number){
    for (let i = 0; i < 20; i++) {
    if  (i%2 !=0) {
        console.log(i)
        
    }
    
}

} */

const { log } = require("node:console");

let number=6

function isOddOrEven(number) {
    if(number % 2===0){
        console.log("Even");
    }
    else{
        console.log("Odd");
        
    }


}
isOddOrEven(number)