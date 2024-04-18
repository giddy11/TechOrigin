// Event Listeners

// element.addEventListener("click", function);
const buttonTwo = document.querySelector('.btn-2')
buttonTwo.addEventListener("click", ()=> alert("I love JS"))

// function alertBtn() {
//     alert('I love JS also')
// }
// buttonTwo.addEventListener("click", alertBtn)


// Mouseover event
const card_3_bg_col = document.querySelector('.card-3')
// console.log(card_3)
card_3_bg_col.addEventListener("mouseover", ()=> {
    card_3_bg_col.style.backgroundColor = 'red'
})