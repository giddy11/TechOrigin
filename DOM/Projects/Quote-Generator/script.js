const quotes = [
    {
        author: "ABRAHAM LINCOLN",
        quote: '"I do the very best I can;and i mean to keep on doing so until the end. "'    
    },
    {
        author: "LAO TZU",
        quote: '"The journey of a thousand miles begins with one step."'    
    },
    {
        author: "DALAI LAMA",
        quote: '"Remember that not getting what you want is sometimes a wonderful stroke of luck."'    
    },
    {
        author: "MAHATMA GANDHI",
        quote: '"The best way to find yourself is to lose yourself in the service of others."'    
    },
    {
        author: "ALBERT EINSTEIN",
        quote: '"If you want to live a happy life,tie it to a goal,not to people or things."'    
    },
    {
        author: "ARISTOTLE",
        quote: '"At his best,man is the noblest of all animals;separated from law and justice he is the worst."'    
    }
]

let count = 1

const text_body = document.getElementById('text-body')

const new_quote_btn = document.getElementById('new-quote-btn')

const new_child_p = document.createElement('span')
text_body.insertBefore(new_child_p, text_body.firstChild);
new_child_p.innerText = quotes[0].quote

const new_child_author = document.createElement('h2')
text_body.insertBefore(new_child_author, text_body.firstChild.nextSibling)
new_child_author.innerText = quotes[0].author
new_child_author.style.color = 'red'
// new_child_author

console.log(text_body)


// new_quote_btn.addEventListener('click', ()=> {
//     // console.log('clicked')

//     text_body.childNodes = null
//     text_body.insertBefore(new_child_p, text_body.firstChild);
//     new_child_p.innerText = quotes[count].quote

    
//     text_body.insertBefore(new_child_author, text_body.firstChild.nextSibling)
//     new_child_author.innerText = quotes[count].author

//     console.log(new_child_author)

//     if (count == quotes.length - 1)
//         count = 0
//     else
//         count++

// })

new_quote_btn.addEventListener('click', ()=> {

    let random = Math.floor(Math.random() * quotes.length);

    new_child_p.innerText = quotes[random].quote
    new_child_author.innerText = quotes[random].author
})