

// Reveal Event
// const revealBtn = document.querySelector('.d-block')
// console.log(revealBtn)
// const hiddenContent = document.querySelector('.d-none')
// console.log(hiddenContent)

// revealBtn.addEventListener('click', alert('hello'))

// revealBtn.addEventListener('click', ()=> {
//     if(hiddenContent.classList.contains('d-block')){
//         hiddenContent.classList.remove('d-block')
//     }
//     else {
//         hiddenContent.classList.add('d-block')
//     }
// })

const revealBtn = document.querySelector('.reveal-btn')
const hiddenContent = document.querySelector('.hidden-content')

revealBtn.addEventListener('click', ()=> {
    if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn')
    }
    else {
        hiddenContent.classList.add('reveal-btn')
    }
})