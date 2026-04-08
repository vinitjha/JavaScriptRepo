//calculator app
const defaultResult = 0;
let currentResult = defaultResult;

function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const calcDescription= `${resultBeforeCalc} ${operator} ${calcNumber}`}
    outputResult(currentResult, calcDescription);

function add() {
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult
    currentResult = currentResult + parseInt(enteredNumber);
    createAndWriteOutput('+', initialResult, enteredNumber)
    }
function substract() {
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult
    currentResult = currentResult - parseInt(enteredNumber);
    createAndWriteOutput('-', initialResult, enteredNumber)
    }
function multiply() {
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult
    currentResult = currentResult * parseInt(enteredNumber);
    createAndWriteOutput('*', initialResult, enteredNumber)
    }
function divide() {
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult
    currentResult = currentResult * parseInt(enteredNumber);
    createAndWriteOutput('/', initialResult, enteredNumber)
    }    

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

