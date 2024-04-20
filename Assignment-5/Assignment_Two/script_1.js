/* 
************************************************************************
*Write a Javascript function that fetches data from an API and cancels the request if it takes longer than a specified time.
************************************************************************
*/

const url_1 = "https://www.boredapi.com/api/activity"
const url_2 = "https://catfact.ninja/fact"
const url_3 = "https://httpstat.us/404"

function FetchUrl() {
    let interval = 0;
    timer = setInterval(async () => {
        let fet = await fetch(url_2)
        interval++;
        console.log(interval);

        if (!fet || !fet.status || fet.status < 200 || fet.status >= 300) {
            clearInterval(timer)
            console.log('Timeout or error occurred');
        } else {
            clearInterval(timer)
            console.log('Response received:', fet);
        }
    }, 2000);
}

FetchUrl();