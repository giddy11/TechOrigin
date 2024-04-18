// DOM Manipulation


// // GetElementById
// const title = document.getElementById('main-heading');
// console.log(title)

// // GetElementByClassName()
// const list_items = document.getElementsByClassName('list-items');
// console.log(list_items)


// // getElementByTagName
// const list_items_tag = document.getElementsByTagName('li');
// console.log(list_items_tag)

// // querySelector
// const container = document.querySelector('div');
// console.log(container)

// // querySelectorAll
// const container_all = document.querySelectorAll('div');
// console.log(container_all)


// const title = document.querySelector('#main-heading')
// title.style.color = 'red'
// console.log(title)

// // The below is for styling elements
// const list_items = document.querySelectorAll('.list-items');
// // list_items[0].style.fontSize = '2rem'
// for(let i = 0; i < list_items.length; i++){
//     list_items[i].style.fontSize = '2rem'
// }
// console.log(list_items)

// The below is for creating elements
const ul = document.querySelector('ul');
// const li = document.createElement('li').innerText = 'X-men'
const li = document.createElement('li')
const html = document.documentElement


// Adding the elements
ul.append(li)

// modifying the text
li.innerText = 'X-Men'

// modifying attributes and classes
li.setAttribute('id', 'main-heading')
li.removeAttribute('id')
li.classList.add('list-items')
// li.classList.remove('list-items')
console.log(li.classList.contains('list-items'))

// to remove an element
li.remove()

// querying the attribute
const title = document.querySelector('#main-heading')
console.log(title.getAttribute('id'))
