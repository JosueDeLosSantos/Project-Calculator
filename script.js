

let add = '+';
let subtract = '-';
let multiply = '*';
let divide = '/';
let number1 = "5";
let number2 = "5";

function operator (symbol, num1, num2){

    if(symbol == '+'){
        let a =  parseInt(num1)
        let b = parseInt(num2)
        return console.log(a + b);

    } else if(symbol == '-'){
        let a =  parseInt(num1)
        let b = parseInt(num2)
        return console.log(a - b);

    } else if(symbol == '*'){
        let a =  parseInt(num1)
        let b = parseInt(num2)
        return console.log(a * b);

    } else if(symbol == '/'){
        let a =  parseInt(num1)
        let b = parseInt(num2)
        return console.log(a / b);

    }
}

operator(multiply, number1, number2)

//Parse numeric values.
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }




const screen = document.querySelector('.screen');
const clear = document.querySelector('.clear');
const operatorKey = document.querySelectorAll('.operator');
const operatorKeys = Array.from(operatorKey);
const number = document.querySelectorAll('.number');
const numbers = Array.from(number);
const point = document.querySelector('.point');
const equal = document.querySelector('.equal');

//Clear the whole screen
let num1 = [];
function cleaner(){
    screen.innerText = '';
    num1 = [];
}

//Append arithmetic symbols
function Show(e){
    screen.innerText += `${e.target.innerText}`;
    if (isNumeric(e.target.innerText)) {
        num1.push(parseFloat(e.target.innerText));
        console.log(num1);
    }
    
}

function Calc(){
    //screen.innerText = `${console.log(screen.innerText)}`;
    console.log(5+5);
}

clear.addEventListener('click', cleaner)
operatorKeys.forEach(i => i.addEventListener('click', Show))
numbers.forEach(i => i.addEventListener('click', Show))
point.addEventListener('click', Show);





