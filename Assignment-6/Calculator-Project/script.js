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



let plusBtnContent = document.getElementById('plusBtn').innerText
let minusBtnContent = document.getElementById('minusBtn').innerText
let divideBtnContent = document.getElementById('divideBtn').innerText
let multiplyBtnContent = document.getElementById('multiplyBtn').innerText

// let symbols = ['+', '-', '*', '/'];
let symbols = [plusBtnContent, minusBtnContent, divideBtnContent,  multiplyBtnContent];



let inputBox = document.getElementById('input-box')

oneBtn.addEventListener('click', ()=>{
    if (inputBox.textContent === '0') {
        inputBox.textContent = '1';
    } else {
        inputBox.textContent += '1';
    }

})

twoBtn.addEventListener('click', ()=>{
    if (inputBox.textContent === '0') {
        inputBox.textContent = '2';
    } else {
        inputBox.textContent += '2';
    }

})

threeBtn.addEventListener('click', ()=>{
    if (inputBox.textContent === '0') {
        inputBox.textContent = '3';
    } else {
        inputBox.textContent += '3';
    }

})

fourBtn.addEventListener('click', ()=>{
    if (inputBox.textContent === '0') {
        inputBox.textContent = '4';
    } else {
        inputBox.textContent += '4';
    }

})

fiveBtn.addEventListener('click', ()=>{
    if (inputBox.textContent === '0') {
        inputBox.textContent = '5';
    } else {
        inputBox.textContent += '5';
    }

})

sixBtn.addEventListener('click', ()=>{
    if (inputBox.textContent === '0') {
        inputBox.textContent = '6';
    } else {
        inputBox.textContent += '6';
    }

})

sevenBtn.addEventListener('click', ()=>{
    if (inputBox.textContent === '0') {
        inputBox.textContent = '7';
    } else {
        inputBox.textContent += '7';
    }

})

eightBtn.addEventListener('click', ()=>{
    if (inputBox.textContent === '0') {
        inputBox.textContent = '8';
    } else {
        inputBox.textContent += '8';
    }

})

nineBtn.addEventListener('click', ()=>{
    if (inputBox.textContent === '0') {
        inputBox.textContent = '9';
    } else {
        inputBox.textContent += '9';
    }

})

zeroBtn.addEventListener('click', ()=>{
    if (inputBox.textContent === '0') {
        inputBox.textContent = '0';
    } else {
        inputBox.textContent += '0';
    }

})

plusBtn.addEventListener('click', () => {
    let len = inputBox.textContent.length;
    let lastChar = inputBox.textContent[len - 1];

    if (inputBox.textContent == '0' || symbols.includes(lastChar))
        inputBox.textContent = "0" + inputBox.textContent.slice(0, len - 1) + plusBtnContent;
    else
        inputBox.textContent += plusBtnContent;
})

minusBtn.addEventListener('click', () => {
    let len = inputBox.textContent.length;
    let lastChar = inputBox.textContent[len - 1];

    if (inputBox.textContent == '0' || symbols.includes(lastChar))
        inputBox.textContent = "0" + inputBox.textContent.slice(0, len - 1) + minusBtnContent;
    else
        inputBox.textContent += minusBtnContent;
})

multiplyBtn.addEventListener('click', () => {
    let len = inputBox.textContent.length; 
    let lastChar = inputBox.textContent[len - 1];

    if (inputBox.textContent == '0' || symbols.includes(lastChar)) 
        inputBox.textContent = "0" + inputBox.textContent.slice(0, len - 1) + multiplyBtnContent;
    else
        inputBox.textContent += multiplyBtnContent;
})

divideBtn.addEventListener('click', () => {
    let len = inputBox.textContent.length;
    let lastChar = inputBox.textContent[len - 1];
    console.log(divideBtnContent)

    if (inputBox.textContent == '0' || symbols.includes(lastChar))
        inputBox.textContent = "0" + inputBox.textContent.slice(0, len - 1) + divideBtnContent;
    else
        inputBox.textContent += divideBtnContent;
})