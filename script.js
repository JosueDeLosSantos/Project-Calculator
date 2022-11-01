

let add = (pam1, pam2) => pam1 + pam2;
let subtract = (pam1, pam2) => pam1 - pam2;
let multiply = (pam1, pam2) => pam1 * pam2;
let divide = (pam1, pam2) => pam1 / pam2;
let firstNum = 5;
let secondNum = 5;

function operator (symbol, pam1, pam2){

    if(symbol == '+'){
    
        return console.log(add(pam1, pam2));

    } else if(symbol == '-'){

        return console.log(subtract(pam1, pam2));

    } else if(symbol == '*'){

        return console.log(multiply(pam1, pam2));

    } else if(symbol == '/'){

        return console.log(divide(pam1, pam2));

    }
}
//Tests function
operator('+', firstNum, secondNum)

//Parse numeric values.
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

//Selectors
const screen = document.querySelector('.screen');
const clear = document.querySelector('.clear');
const operatorKey = document.querySelectorAll('.operator');
const operatorKeys = Array.from(operatorKey);
const number = document.querySelectorAll('.number');
const numbers = Array.from(number);
const point = document.querySelector('.point');
const equal = document.querySelector('.equal');

//Clear the whole screen
let num1 = 0;
let num2 = 0;
let symbol = null;
let numCounter = 0;
function cleaner(){
    screen.innerText = '';
    num1 = 0;
    num2 = 0;
}

//Append arithmetic symbols
function Show(e){
    
    //Screen display
    screen.innerText += `${e.target.innerText}`;
    //Pair of numbers
    if (isNumeric(e.target.innerText) && numCounter == 0) {

        numCounter++;
        num1 = parseFloat(e.target.innerText);
        console.log(num1);

    } else if (isNumeric(e.target.innerText) && numCounter == 1) {

        num2 = parseFloat(e.target.innerText);
        console.log(num2);
        numCounter = 0;
    }

    //Arithmetic symbol
    if(e.target.innerText == '+' ||
    e.target.innerText == '-' ||
    e.target.innerText == '*' ||
    e.target.innerText == '/'){

        symbol = e.target.innerText;
        console.log(e.target.innerText);
    }
    

}

function Calc(){
    //screen.innerText = `${console.log(screen.innerText)}`;
    console.log(5+5);
}

clear.addEventListener('click', cleaner)
operatorKeys.forEach(i => i.addEventListener('click', Show))
numbers.forEach(i => i.addEventListener('click', Show))
point.addEventListener('click', Show)





