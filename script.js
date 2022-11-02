


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
let symbolCounter = 0;
let numCounter = 0;
let temp1 = null;
let temp2 = null;
let tempResult = null;
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
    temp2 = null;
    tempResult = null;
    decimalTester = false;
    resultCounter = 0;
    symbolCounter = 0;
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

        symbolCounter = 0; //Resests the symbolCounter varieble to void arithmetic symbols from been typed consecutively.
        
        /*the function below cleans everything if the equal key button has been typed. 
        I placed this fuction inside the 'second number'block because the 'Second number' block of code 
        is activated when the equal key button is typed.*/
        if(resultCounter > 0){
            cleaner();
            return
        }

        if(e.target.innerText != '.' && decimalTester == false) {
            screen.innerText += `${e.target.innerText}`;

            num2.push(e.target.innerText);
            temp2 = parseFloat(num2.join(''));

        }else if (e.target.innerText == '.' && decimalTester == true){//Avoids decimal points from been typed consecutively.

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

        symbolCounter++; //Avoids arithmetic symbols from been typed consecutively. 
        
        if(symbolCounter > 1){
            return;
        } else if (symbolCounter <= 1){
            symbol = e.target.innerText;
            screen.innerText += `${e.target.innerText}`;
            numCounter++; //Ensures second number is not typed until an arithmetic symbol be entered.
            decimalTester = false; //Resets the decimalTester variable so that the second number be entered correctly.
            num2 = []; //Resets the num2 variable so that the second number be entered correctly.
            temp2 = null; //Resets the temp2 variable so that the second number be entered correctly.
            if(numCounter > 1) temp1 = tempResult;
        }

        

    }

}

function finalResut(){


    if(resultCounter > 0){ //Cleans everything if a previous result has been achieved.
        cleaner();
        return
    } else if (resultCounter == 0){
        resultCounter++;
        if (tempResult.toString() == 'Infinity') {
            screen.innerText = "Can't divide by 0";
        } else {
            
            if(tempResult.toString() != 'Infinity'){

                if(tempResult.toString() == 'NaN') {
                    screen.innerText = "Can't divide by 0";
                } else {
                    screen.innerText = tempResult;
                }
                
            }
        }
        
    }

}


//Event listeners
clear.addEventListener('click', cleaner)
operatorKeys.forEach(i => i.addEventListener('click', Show))
numbers.forEach(i => i.addEventListener('click', Show))
point.addEventListener('click', Show)
equal.addEventListener('click', finalResut)