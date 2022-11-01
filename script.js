
//Basic arithmetic functions
let add = (pam1, pam2) => pam1 + pam2;
let subtract = (pam1, pam2) => pam1 - pam2;
let multiply = (pam1, pam2) => pam1 * pam2;
let divide = (pam1, pam2) => pam1 / pam2;



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


let num1 = [];
let num2 = [];
let symbol = '';
let numCounter = 0;
let temp1 = 0;
let temp2 = 0;
let result = 0;
let tempResult = 0;

//Clear the whole screen
function cleaner(){
    screen.innerText = '';
    num1 = [];
    num2 = [];
    symbol = '';
    numCounter = 0;
    temp1 = 0;
    temp2 = 0;
}

//Calculator
function operator (symbol, pam1, pam2){

    if(symbol == '+'){
        
        result = add(pam1, pam2)
        return console.log(result);

    } else if(symbol == '-'){

        result = subtract(pam1, pam2)
        return console.log(result);

    } else if(symbol == '*'){

        result = add(pam1, pam2)
        return console.log(result);

    } else if(symbol == '/'){

        result = add(pam1, pam2)
        return console.log(result);

    }
}

//Screen display
function Show(e){

    screen.innerText += `${e.target.innerText}`;
    //Pair of numbers
    if (isNumeric(e.target.innerText) && numCounter == 0) {

        num1.push(e.target.innerText);
        temp1 = parseFloat(num1.join(''));
        e.stopPropagation();

    }else if (isNumeric(e.target.innerText) && numCounter > 0) {

        num2.push(e.target.innerText);
        temp2 = parseFloat(num2.join(''));
        console.log(temp1)
        console.log(temp2)

        switch(symbol) {
            case '+':
                tempResult = temp1 + temp2
              break;
            case '-':
                tempResult = temp1 - temp2
              break;
            case '*':
                tempResult = temp1 * temp2
              break;
            case '/':
                tempResult = temp1 / temp2
              break;
            default:
              // code block
          }
          console.log(tempResult)
        /*
        if(e.target.innerText == '+') tempResult = temp1 + temp2;
        if(e.target.innerText == '-') tempResult = temp1 - temp2;
        
        */

        //e.stopPropagation();

    }

    //Arithmetic symbols
    if(e.target.innerText == '+' ||
    e.target.innerText == '-' ||
    e.target.innerText == '*' ||
    e.target.innerText == '/'){

        symbol = e.target.innerText;
        numCounter++;
        //console.log(tempResult);
        num2 = [];
        temp2 = 0;
        if(numCounter > 1) temp1 = tempResult;
        console.log(temp1)
        console.log(temp2)
        //e.stopPropagation();
    }

    e.stopPropagation();

}

function finalResut(){

    screen.innerText += `${tempResult}`;

}



//Event listeners
clear.addEventListener('click', cleaner)
operatorKeys.forEach(i => i.addEventListener('click', Show))
numbers.forEach(i => i.addEventListener('click', Show))
point.addEventListener('click', Show)
equal.addEventListener('click', finalResut)