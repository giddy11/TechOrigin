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
const delBtn = document.getElementById('delBtn')
const ceBtn = document.getElementById('ceBtn')
const clearBtn = document.getElementById('clearBtn')
const resultBox = document.getElementById('resultBox')





let plusBtnContent = document.getElementById('plusBtn').innerText
let minusBtnContent = document.getElementById('minusBtn').innerText
let divideBtnContent = document.getElementById('divideBtn').innerText
let multiplyBtnContent = document.getElementById('multiplyBtn').innerText

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

// Helper functions

function PrintOperatorToInputBox(inputBox, len, buttonName){
    let lastChar = inputBox.textContent[len - 1];

    if (inputBox.textContent == '0' || symbols.includes(lastChar))
        return "0" + inputBox.textContent.slice(1, len - 1) + buttonName;
    else
        return inputBox.textContent + buttonName;
}

function TheIndexOf(expression, operators){

    for (let i = 0; i < operators.length; i++) {
        if (expression.includes(operators[i]))
            return expression.indexOf(operators[i]);
    }
    return -1
}

function newExpression(expression){
    if (expression.trim().length === 0 || !expression.includes('.'))
        expression += "."

    return expression
}