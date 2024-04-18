// Event Propagation: This refers to how an event travels through the document object model or the DOM tree
// It is like electricity running through a wire until it reaches its destination
// therefore it needs to pass through every nodes until it reaches the end or is forcibly stopped
// They are of 3 phases: 
// Event Capturing: this starts from the root and travels all the way to the target.
// Target: after it has reached the target, it goes into the bubbling phase
// Event Bubbling: which travels back up from the target to the root


window.addEventListener('click', ()=> console.log('Window'), false)

document.addEventListener('click', ()=> console.log('Document'), false)


document.querySelector('.div2').addEventListener('click', ()=> {
    // e.stopPropagation()
    console.log('DIV 2')
}, {once: true})

document.querySelector('.div1').addEventListener('click', ()=> console.log('DIV 1'), false)


document.querySelector('.button').addEventListener('click', (e)=> {
    e.preventDefault()
    console.log(e.target.innerText = 'clicked')
}, false)
