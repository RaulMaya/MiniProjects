const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBefore, calcNumber) {
    const calcDesciption = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDesciption);
}

function createEntry(operation, prevResult, numAdded, result) {
    const logEntry = {
        operation: operation,
        prevResult: prevResult,
        numAdded: numAdded,
        result: result

    };
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
}
function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();

    if (
        calculationType !== 'ADD' && 
        calculationType !== 'SUBSTRACT' && 
        calculationType !== 'DIVIDE' &&
        calculationType !== 'MULTIPLY' ||
        !enteredNumber
    ) {
        return;
    }
    
/*     if (
        calculationType === 'ADD' ||
        calculationType === 'SUBSTRACT' || 
        calculationType === 'DIVIDE' ||
        calculationType === 'MULTIPLY'
    ) {
       function code 
    } */

    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBSTRACT'){
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    // currentResult = currentResult + +userInput.value;
    createAndWriteLog(mathOperator, initialResult, enteredNumber);
    createEntry(calculationType, initialResult, enteredNumber, currentResult)
}

/* function add() {
    calculateResult('ADD');
}

function substract() {
    calculateResult('SUBSTRACT');
}


function divide() {
    calculateResult('DIVIDE');
}


function multiply() {
    calculateResult('MULTIPLY');
}
 */

function calculationStage(operation){
    if (operation === 'ADD'){
        calculateResult(operation);
    } else if (operation === 'SUBSTRACT') {
        calculateResult(operation);
    } else if (operation === 'MULTIPLY')  {
        calculateResult(operation);
    } else {
        calculateResult(operation);
    }
}



addBtn.addEventListener('click', calculationStage.bind(this,'ADD'));
subtractBtn.addEventListener('click', calculationStage.bind(this,'SUBSTRACT'));
multiplyBtn.addEventListener('click', calculationStage.bind(this,'MULTIPLY'));
divideBtn.addEventListener('click', calculationStage.bind(this,'DIVIDE'));

// currentResult = add(5,2);
// alert(currentResult)

// let calculationDescription  = `(${defaultResult} + 10) * 3 / 2 - 1`;
// let errorMessage = 'An error \n' + 
//                     'ocurred!';
