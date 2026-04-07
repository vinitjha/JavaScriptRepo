const defaultResult = 0;
let currentResult = defaultResult;

function add(){
    currentResult = int(currentResult + userInput.value);
    outputResult(currentResult,calculationDescription)
    
}
addBtn.addEventListener('click', add);
outputResult(currentResult,calculationDescription);
