// Event Delegation

// It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector

const football = document.getElementById('football')
const basketball = document.getElementById('basketball')
const boxing = document.getElementById('boxing')
const tennis = document.getElementById('tennis')
const golf = document.getElementById('golf')
// const sports = document.getElementById('sports')
const sports = document.querySelector('#sports')
const add_btn = document.getElementById('add-btn')


// sports.setAttribute('id', 'sports')

// const football = document.querySelector('#football')
// console.log(football)


// football.addEventListener('click', (e)=> {
//     // football.style.backgroundColor = 'pink'
//     // console.log("football clicked")
//     // console.log(e)

//     // OR
//     console.log("football is clicked")
//     const target = e.target

//     if (target.matches('li'))
//         target.style.backgroundColor = 'lightgrey'


// })

// basketball.addEventListener('click', ()=> {
//     basketball.style.backgroundColor = 'pink'
//     console.log("basketball clicked")
// })

// boxing.addEventListener('click', ()=> {
//     boxing.style.backgroundColor = 'pink'
//     console.log("boxing clicked")
// })

// tennis.addEventListener('click', ()=> {
//     tennis.style.backgroundColor = 'pink'
//     console.log("tennis clicked")
// })

// golf.addEventListener('click', ()=> {
//     golf.style.backgroundColor = 'pink'
//     console.log("golf clicked")
// })


// now lets achieve the above using delegation

sports.addEventListener('click', (e)=> {
    const target = e.target
    if (target.matches('li'))
        target.style.backgroundColor = 'lightgrey'
    console.log(target.getAttribute('id') + ' is clicked')
})

add_btn.addEventListener('click', ()=> {
    // console.log('add button is clicked')
    const li = document.createElement('li')

    // sports.append(li)
    sports.appendChild(li)

    li.innerText = 'volleyball'
    li.setAttribute('id', 'volleyball')
    li.setAttribute('class', 'text-white fs-4 border-blue')
})