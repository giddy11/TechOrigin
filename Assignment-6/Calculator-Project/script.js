let historyDatas = {
    date :new Date(),
    input : "",
    result : ""
}

let plusBtnContent = document.getElementById('plusBtn').innerText
let minusBtnContent = document.getElementById('minusBtn').innerText
let divideBtnContent = document.getElementById('divideBtn').innerText
let multiplyBtnContent = document.getElementById('multiplyBtn').innerText
let sqrtRootBtnContent = document.getElementById('sqrtRootBtn').innerText
let piBtnContent = document.getElementById('piBtn').innerText


// let symbols = ['+', '-', '*', '/'];
let symbols = [plusBtnContent, minusBtnContent, divideBtnContent,  multiplyBtnContent];

let inputBoxContent = document.getElementById('input-box').innerText

let Digits = (number)=> {
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length+1;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + number;
    else
        inputBox.textContent += number;
}

let BasicOperations = (op)=> {
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;
    let input = PrintOperatorToInputBox(inputBox, len, op)
    inputBox.textContent = input
}

let BasicSymbols = (sym)=> {
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == sym || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + sym;
    else
        inputBox.textContent += sym;
}

let Calculate = ()=> {
    let inputBox = document.getElementById('input-box')
    let resultBox = document.getElementById('resultBox')
    let getOpIndex = TheIndexOf(inputBox.innerText, symbols);
    let operatorIndex = FindOperator(inputBox.innerText, symbols);
    let calc_split = [inputBox.textContent.slice(0, getOpIndex), inputBox.textContent.slice(getOpIndex + 1)];

    resultBox.innerText = performOperation(operatorIndex, calc_split)
    SaveHistory(inputBox.innerText, resultBox.innerText)
    inputBox.innerText = ""
}

let ZeroBtn=()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0') && (!inputBox.textContent[len - 2] == '.'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 0;
    else
        inputBox.textContent += '0';
}

let DotFunc=()=>{
    let inputBox = document.getElementById('input-box')
    let inputText = inputBox.textContent;

    let checkIndex = TheIndexOf(inputText, symbols)

    if (checkIndex == -1){
        inputText = newExpression(inputText)
        console.log(inputText)
    }
    else{
        let start = inputText.slice(0, checkIndex + 1)
        let end = inputText.slice(checkIndex + 1)
        inputText = start + newExpression(end)
    }

    inputBox.textContent = inputText
}

let DivideFunc=()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;
    let input = PrintOperatorToInputBox(inputBox, len, divideBtnContent)

    inputBox.textContent = input
}

let ClearFunc = ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBoxContent.length
    inputBox.textContent = inputBox.textContent.slice(0, len - 1)
}

let CeFunc = ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBoxContent.length
    inputBox.textContent = inputBox.textContent.slice(0, len - 1)
    resultBox.innerText = '0'
}

let DeleteFunc = ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBoxContent.length
    inputBox.textContent =  inputBox.textContent.slice(0, len - 2)
}

let SqrtRootFunc = ()=> {
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + sqrtRootBtnContent;
    else
        inputBox.textContent += sqrtRootBtnContent;
}

let PiFunc = ()=> {
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + piBtnContent;
    else
        inputBox.textContent += piBtnContent;
}

let RadFunc = ()=> {
    let displayBox = document.getElementById('display-box')

    displayBox.textContent = 'Rad';
}

let DisplayHistory = ()=>{
    let historyData = document.getElementById('history-data')
    console.log(historyData.textContent)

    if(historyData.classList.contains('hidden')){
        historyData.classList.remove('hidden')
    }
    else {
        historyData.classList.add('hidden')
    }
}

let DisplayHistory2 = ()=>{
    let historyData = document.getElementById('history-data2')
    let input_box = document.getElementById('input-box2')
    let calculator_logo = document.getElementById('calculator-logo')
    let calculation_section = document.getElementById('calculation-section')


    console.log(historyData.textContent)

    if(historyData.classList.contains('hidden')){
        historyData.classList.remove('hidden')
        input_box.classList.add('hidden')
        calculator_logo.classList.add('hidden')
        calculation_section.classList.add('hidden')

    }
    else {
        historyData.classList.add('hidden')
        input_box.classList.remove('hidden')
        calculator_logo.classList.remove('hidden')
        calculation_section.classList.remove('hidden')

    }
}

// Helper functions

function PrintOperatorToInputBox(inputBox, len, buttonName){
    let lastChar = inputBox.textContent[len - 1];

    if (inputBox.textContent == '0' || symbols.includes(lastChar))
        return "0" + inputBox.textContent.slice(1, len - 1) + buttonName;
    else
        return inputBox.textContent + buttonName;
}

// this function finds the current index position in the inputbox
function TheIndexOf(expression, operators){

    console.log(expression)

    for (let i = 0; i < operators.length; i++) {
        if (expression.includes(operators[i])){
            console.log(i)
            return expression.indexOf(operators[i]);
        }
    }
    return -1
}

//this function finds the current index position in the symbol array list
function FindOperator(expression, operators){

    console.log(expression)

    for (let i = 0; i < operators.length; i++) {
        if (expression.includes(operators[i])){
            return i
        }
    }
    return -1
}

function newExpression(expression){
    if (expression.trim().length === 0 || !expression.includes('.'))
        expression += "."

    return expression
}

function Add(a,b){
    return a + b
}

function Subtract(a,b){
    return a - b
}

function Multiply(a,b){
    return a * b
}

function Divide(a,b){
    return a / b
}

function performOperation(operatorIndex, calc_split) {
    switch (symbols[operatorIndex]) {
        case plusBtnContent:
            return Add(Number(calc_split[0]), Number(calc_split[1]));
        case minusBtnContent:
            return Subtract(Number(calc_split[0]), Number(calc_split[1]));
        case divideBtnContent:
            return Divide(Number(calc_split[0]), Number(calc_split[1]));
        case multiplyBtnContent:
            return Multiply(Number(calc_split[0]), Number(calc_split[1]));
        default:
            return 'Try again';
    }
}

function SaveHistory(inputbox, resultbox){
    let historyData = document.getElementById('history-data')
    let historyData2 = document.getElementById('history-data2')

    let no_history = document.getElementById('no-history')

    no_history.classList.add('hidden')

    historyData.innerHTML += `
                            <h3>${historyDatas.date.toDateString()}</h3>
                            <span>${inputbox}</span><br>
                            <span>${resultbox}</span>
                            
                            `

    historyData2.innerHTML += `
                            <h3>${historyDatas.date.toDateString()}</h3>
                            <span>${inputbox}</span><br>
                            <span>${resultbox}</span>
                            
                            `
}