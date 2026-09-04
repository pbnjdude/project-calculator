const display = document.querySelector(".values");
const equalsButton = document.getElementById("equals");
const allOperatorButtons = document.querySelectorAll(".operator");
let equasion = [];
let currentOperator ="";
let num = ""; 
let firstNumber = ""; 
let secondNumber = "";
let total = "";


///debug
const firstNumberDebug = document.querySelector(".firstNumber");
const secondNumberDebug = document.querySelector(".secondNumber");
const numDebug =document.querySelector(".num");


function clearDisplay(){
    display.textContent = ""
}

function debugFirstSecond(){
    //firstNumberDebug.textContent = "firstNum = " +firstNumber;
    //secondNumberDebug.textContent = "secondNum = " + secondNumber;
    //numDebug.textContent = "num = " + num;
}
function deselectAllOperators(){
    for (let i = 0; i <= 5; i++){
        let operatorID = allOperatorButtons[i].id;       
        allOperatorButtons[i].classList.remove("clickedOperator");   
    }
}
function operatorSelected(operator){
    deselectAllOperators();
    const currentId = operator.id ;
    const operatorPressed = document.getElementById(currentId);
    if (operator.classList.contains("clickedOperator"))
    {
        operatorPressed.classList.remove("clickedOperator")
    }else{
        operatorPressed.classList.add("clickedOperator")
    }
    
    
    switch(operator.id){
        case "clear": {
            display.textContent = "";
            firstNumber = "";
            secondNumber = ""; 
            num = ""; 
            operatorPressed.classList.remove("clickedOperator")
        }break;
        case "equals": {
            operatorPressed.classList.remove("clickedOperator")
            let result
            switch(currentOperator){
                case "multi": {
                    result = multiply(firstNumber, secondNumber); 
                    num = result;
                    display.textContent = result; 
                }break; 
                case "add": {
                    result = add(firstNumber, secondNumber)
                    secondNumber = firstNumber; 
                    num = result;
                    display.textContent = result; ;
                }break;
                case "sub":{
                    result = subtract(firstNumber, secondNumber)
                    secondNumber = firstNumber; 
                    num = result;
                    display.textContent = result; ;
                }break;
                case "div": {
                    result = divide(firstNumber, secondNumber)
                    secondNumber = firstNumber; 
                    num = result;
                    display.textContent = result; ;
                }break; 
                
            }break;
            
        }
        case "multi":
        case "add":
        case "sub":
        case "div":{
            currentOperator = operator.id
            
        };break; 


    }
    if (num !== ""){
        
        if (firstNumber !== ""){
            secondNumber = parseFloat(num); 
        }else{
            firstNumber = parseFloat(num); 
        }
    };
    num = ""; 
}

const numOne = document.getElementById("one");
const button = document.querySelector(".buttons");


button.addEventListener("click", (event)=>{
    
    const numberID = event.target.getAttribute("id");
    //console.log(numberID);
    if (numberID !== null){
        currentValue = convertIdToValue(numberID);
        //console.log(currentValue);
        if (currentValue == "operator"){
            operatorSelected(event.target);
            //console.log(event)
        }else{
            if (currentOperator !== "")
            {
                num += currentValue;
                secondNumber = parseFloat(num);
                display.textContent = num;
            }else{
                num += currentValue;
                firstNumber = parseFloat(num);
                display.textContent = num;
            }
        }

    }
    debugFirstSecond();
    
})

function convertIdToValue(id){
    switch(id){
        case "one": return 1; break;
        case "two": return 2; break;
        case "three": return 3; break; 
        case "four": return 4; break; 
        case "five": return 5; break; 
        case "six": return 6; break; 
        case "seven": return 7; break; 
        case "eight": return 8; break; 
        case "nine": return 9; break; 
        case "zero": return 0; break; 
        case "decimal": return "."; break; 
        case "clear": return "operator"; break; 
        case "equals": return "operator"; break; 
        case "div": return "operator"; break;
        case "add": return "operator"; break; 
        case "multi": return "operator"; break;
        case "sub": return "operator"; break; 
         default: return ; 
    }
}

function add(a, b){
    return parseFloat((a + b).toFixed(4)); 
}

function divide(a, b){
    return parseFloat((a/b).toFixed(4));
}

function subtract(a, b){
    return parseFloat((a - b).toFixed(4));
}

function multiply(a, b){
    return a * b
}