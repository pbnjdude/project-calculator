const display = document.querySelector(".values");
const equalsButton = document.getElementById("equals");
const operatorButtons = document.getElementById("operators");
let equasion = []
let num = ""; 

function numberPressed(num){
    equasion.push(num);
    
}

function numberOne(){
    display.textContent = "1"
}

function operatorSelected(operator){
    const currentId = operator.id ;
    console.log(currentId);
    const operatorPressed = document.getElementById(currentId);
    if (operator.classList.contains("clickedOperator"))
    {
        operatorPressed.classList.remove("clickedOperator")
    }else{
        operatorPressed.classList.add("clickedOperator")
    }
    
}

const numOne = document.getElementById("one");
const button = document.querySelector(".numbers");


button.addEventListener("click", (event)=>{
    selectedButton = event.target
    //console.log({selectedButton});
})

button.addEventListener("click", (event)=>{
    const numberID = event.target.getAttribute("id");
    console.log(numberID);
    if (numberID !== null){
        currentValue = convertIdToValue(numberID);
        num += currentValue;
        display.textContent += currentValue;
        console.log(num);
    }
    
})

operatorButtons.addEventListener("click", (event)=>{
    event.preventDefault();
    operatorSelected(event.target);

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
         default: return ; 
    }
}