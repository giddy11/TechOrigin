const oneBtn = document.getElementById('oneBtn')
const twoBtn = document.getElementById('twoBtn')
const threeBtn = document.getElementById('threeBtn')
const fourBtn = document.getElementById('fourBtn')
const fiveBtn = document.getElementById('fiveBtn')
const sixBtn = document.getElementById('sixBtn')
const sevenBtn = document.getElementById('sevenBtn')
const eightBtn = document.getElementById('eightBtn')
const nineBtn = document.getElementById('nineBtn')
const plusBtn = document.getElementById('plusBtn')
const minusBtn = document.getElementById('minusBtn')
const divideBtn = document.getElementById('divideBtn')
const multiplyBtn = document.getElementById('multiplyBtn')
const equalToBtn = document.getElementById('equalToBtn')
const sqrtRootBtn = document.getElementById('sqrtRootBtn')
const closeBracketBtn = document.getElementById('closeBracketBtn')
const openBracketBtn = document.getElementById('openBracketBtn')
const dotBtn = document.getElementById('dotBtn')
const exponentBtn = document.getElementById('exponentBtn')
const piBtn = document.getElementById('piBtn')
const raiseToPowBtn = document.getElementById('raiseToPowBtn')
const factorialBtn = document.getElementById('factorialBtn')
const inBtn = document.getElementById('inBtn')
const radBtn = document.getElementById('radBtn')
const sinBtn = document.getElementById('sinBtn')
const cosBtn = document.getElementById('cosBtn')
const tanBtn = document.getElementById('tanBtn')
const percentBtn = document.getElementById('percentBtn')
const InBtn = document.getElementById('InBtn')
const logBtn = document.getElementById('logBtn')
const historyBtn = document.getElementById('historyBtn')



let historyDatas = {
    date :new Date(),
    input : "",
    result : ""
}




const delBtn = document.getElementById('delBtn')
const ceBtn = document.getElementById('ceBtn')
const clearBtn = document.getElementById('clearBtn')


const resultBox = document.getElementById('resultBox')
const displayBox = document.getElementById('display-box')





let plusBtnContent = document.getElementById('plusBtn').innerText
let minusBtnContent = document.getElementById('minusBtn').innerText
let divideBtnContent = document.getElementById('divideBtn').innerText
let multiplyBtnContent = document.getElementById('multiplyBtn').innerText
let sqrtRootBtnContent = document.getElementById('sqrtRootBtn').innerText
let piBtnContent = document.getElementById('piBtn').innerText


// let symbols = ['+', '-', '*', '/'];
let symbols = [plusBtnContent, minusBtnContent, divideBtnContent,  multiplyBtnContent];


// let inputBox = document.getElementById('input-box')
let inputBoxContent = document.getElementById('input-box').innerText

oneBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length+1;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 1;
    else
        inputBox.textContent += '1';
})

twoBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length+1;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 2;
    else
        inputBox.textContent += '2';
})

threeBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length+1;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 3;
    else
        inputBox.textContent += '3';
})

fourBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length+1;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 4;
    else
        inputBox.textContent += '4';
})

fiveBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length+1;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 5;
    else
        inputBox.textContent += '5';
})

sixBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length+1;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 6;
    else
        inputBox.textContent += '6';
})

sevenBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length + 1;
    console.log(len)

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 7;
    else
        inputBox.textContent += '7';
})

eightBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length+1;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 9;
    else
        inputBox.textContent += '8';
})

nineBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length+1;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 9;
    else
        inputBox.textContent += '9';

})

zeroBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0') && (!inputBox.textContent[len - 2] == '.'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 0;
    else
        inputBox.textContent += '0';
})

plusBtn.addEventListener('click', () => {
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;
    let input = PrintOperatorToInputBox(inputBox, len, plusBtnContent)

    inputBox.textContent = input
})

dotBtn.addEventListener('click', () => {
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
})


minusBtn.addEventListener('click', () => {
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;
    let input = PrintOperatorToInputBox(inputBox, len, minusBtnContent)

    inputBox.textContent = input
})

multiplyBtn.addEventListener('click', () => {
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length; 
    let input = PrintOperatorToInputBox(inputBox, len, multiplyBtnContent)

    inputBox.textContent = input
})

divideBtn.addEventListener('click', () => {
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;
    // let lastChar = inputBox.textContent[len - 1];
    // console.log(divideBtnContent)

    // // this handles the case of // or */ or +-
    // if (inputBox.textContent == '0' || symbols.includes(lastChar))
    //     inputBox.textContent = "0" + inputBox.textContent.slice(1, len - 1) + divideBtnContent;
    // else
    //     inputBox.textContent += divideBtnContent;

    let input = PrintOperatorToInputBox(inputBox, len, divideBtnContent)

    inputBox.textContent = input
})

ceBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBoxContent.length
    inputBox.textContent = inputBox.textContent.slice(0, len - 1)
    resultBox.innerText = '0'
})

clearBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    console.log(delBtn)
    let len = inputBoxContent.length
    inputBox.textContent = inputBox.textContent.slice(0, len - 1)
})

delBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBoxContent.length
    inputBox.textContent =  inputBox.textContent.slice(0, len - 2)
})

openBracketBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == '(' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + '(';
    else
        inputBox.textContent += '(';
})

closeBracketBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == ')' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + ')';
    else
        inputBox.textContent += ')';
})

sqrtRootBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + sqrtRootBtnContent;
    else
        inputBox.textContent += sqrtRootBtnContent;
})

exponentBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 'e';
    else
        inputBox.textContent += 'e';
})

piBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + piBtnContent;
    else
        inputBox.textContent += piBtnContent;
})

raiseToPowBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + '^';
    else
        inputBox.textContent += '^';
})

factorialBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + '!';
    else
        inputBox.textContent += '!';
})

logBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 'Log';
    else
        inputBox.textContent += 'Log';
})

inBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 'in';
    else
        inputBox.textContent += 'in';
})

InBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 'In';
    else
        inputBox.textContent += 'In';
})

percentBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + '%';
    else
        inputBox.textContent += '%';
})

tanBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 'Tan';
    else
        inputBox.textContent += 'Tan';
})

cosBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 'Cos';
    else
        inputBox.textContent += 'Cos';
})

sinBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let len = inputBox.textContent.length;

    if (inputBox.textContent == '0' || (inputBox.textContent[len - 1] == '0'))
        inputBox.textContent = inputBox.textContent.slice(1, len - 1) + 'Sin';
    else
        inputBox.textContent += 'Sin';
})

radBtn.addEventListener('click', ()=>{
    let displayBox = document.getElementById('display-box')

    displayBox.textContent = 'Rad';
})

equalToBtn.addEventListener('click', ()=>{
    let inputBox = document.getElementById('input-box')
    let resultBox = document.getElementById('resultBox')
    let getOpIndex = TheIndexOf(inputBox.innerText, symbols);
    let operatorIndex = FindOperator(inputBox.innerText, symbols);
    let calc_split = [inputBox.textContent.slice(0, getOpIndex), inputBox.textContent.slice(getOpIndex + 1)];

    resultBox.innerText = performOperation(operatorIndex, calc_split)
    SaveHistory(inputBox.innerText, resultBox.innerText)
    inputBox.innerText = ""
})

historyBtn.addEventListener('click', ()=> {
    let historyData = document.getElementById('history-data')
    console.log(historyData.textContent)

    if(historyData.classList.contains('hidden')){
        historyData.classList.remove('hidden')
    }
    else {
        historyData.classList.add('hidden')
    }
})




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
    let no_history = document.getElementById('no-history')

    no_history.classList.add('hidden')

    historyData.innerHTML += `
                            <h3>${historyDatas.date.toDateString()}</h3>
                            <span>${inputbox}</span><br>
                            <span>${resultbox}</span>
                            
                            `
}