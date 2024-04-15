/* 
************************************************************************
*Write a Javascript function that fetches data from an API and cancels the request if it takes longer than a specified time.
************************************************************************
*/

const url_1 = "https://www.boredapi.com/api/activity"
const url_2 = "https://catfact.ninja/fact"
const url_3 = "https://httpstat.us/404"


// let getFile = async (url) => {
//     let response = await fetch(url)
//     .then(content=> content.json())
//     .then(data=> console.log(data))
//     // .catch(err=> console.log(`ERROR! ${err}`))
// }

// getFile(url_3);

let getFile = async (url) => {
    let response = await fetch(url)
    .then(res=> console.log(`You could ${res.data.activity}`))
    .catch(err=> console.log(`ERROR! ${err}`))
}

getFile(url_3);