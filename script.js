


//Parse numeric values.
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) || str == '.' // ...ensure strings of whitespace fail and ensure points are accepted
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

//Global variables
let num1 = [];
let num2 = [];
let symbol = '';
let numCounter = 0;
let temp1 = null;
let temp2 = 0;
let tempResult = 0;
let decimalTester = false;
let resultCounter = 0;

//Clear everything
function cleaner(){
    screen.innerText = '';
    num1 = [];
    num2 = [];
    symbol = '';
    numCounter = 0;
    temp1 = null;
    temp2 = 0;
    tempResult = 0;
    decimalTester = false;
    resultCounter = 0;
}

//Screen display
function Show(e){

    //First number
    if (isNumeric(e.target.innerText) && numCounter == 0) {

        if(e.target.innerText != '.' && decimalTester == false) {
            screen.innerText += `${e.target.innerText}`;

            num1.push(e.target.innerText);
            temp1 = parseFloat(num1.join(''));

        }else if (e.target.innerText == '.' && decimalTester == true){

            return;
        }
        
        if(e.target.innerText == '.' && Number.isInteger(temp1)){
            screen.innerText += `${e.target.innerText}`;
            decimalTester = true;
            num1.push(e.target.innerText);
            temp1 = parseFloat(num1.join(''));

        }
        
        if (e.target.innerText != '.' && decimalTester == true){
            screen.innerText += `${e.target.innerText}`;

            num1.push(e.target.innerText);
            temp1 = parseFloat(num1.join(''));

        } 
        
        if(e.target.innerText == '.' && temp1 == null){
            return;
        } 
    
    //Second number
    }else if (isNumeric(e.target.innerText) && numCounter > 0) {

        if(resultCounter > 0){//Cleans everything if a previous result has been achieved.
            cleaner();
            return
        }

        if(e.target.innerText != '.' && decimalTester == false) {
            screen.innerText += `${e.target.innerText}`;

            num2.push(e.target.innerText);
            temp2 = parseFloat(num2.join(''));

        }else if (e.target.innerText == '.' && decimalTester == true){

            return;
        }
        
        if(e.target.innerText == '.' && Number.isInteger(temp2)){
            screen.innerText += `${e.target.innerText}`;
            decimalTester = true;
            num2.push(e.target.innerText);
            temp2 = parseFloat(num2.join(''));

        }
        
        if (e.target.innerText != '.' && decimalTester == true){
            screen.innerText += `${e.target.innerText}`;

            num2.push(e.target.innerText);
            temp2 = parseFloat(num2.join(''));
        } 
        
        if(e.target.innerText == '.' && temp2 == null){
            return;
        } 

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

    }

    //Arithmetic symbols catcher
    if(e.target.innerText == '+' ||
        e.target.innerText == '-' ||
        e.target.innerText == '*' ||
        e.target.innerText == '/'){

            if(resultCounter > 0){ //Cleans everything if a previous result has been achieved.
                cleaner();
                return
            }

        symbol = e.target.innerText;
        screen.innerText += `${e.target.innerText}`;
        numCounter++; //Ensures second number is not typed until an arithmetic symbol be entered.
        decimalTester = false; //Resets the decimalTester variable so that the second number be entered correctly.
        num2 = []; //Resets the num2 variable so that the second number be entered correctly.
        temp2 = null; //Resets the temp2 variable so that the second number be entered correctly.
        if(numCounter > 1) temp1 = tempResult;

    }

}

function finalResut(){
    resultCounter++;
    return (tempResult.toString() == 'Infinity') ? screen.innerText = "ERROR": 
    screen.innerText = `${tempResult}`;

}


//Event listeners
clear.addEventListener('click', cleaner)
operatorKeys.forEach(i => i.addEventListener('click', Show))
numbers.forEach(i => i.addEventListener('click', Show))
point.addEventListener('click', Show)
equal.addEventListener('click', finalResut)



/* next:
-Clear everything if the equal key button is pressed without any previous number.
-Clear everything if an arithmetic sybol is entered without any previous number.
*/



