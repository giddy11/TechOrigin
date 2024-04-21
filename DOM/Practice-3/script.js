
let submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (e)=>{

    let database = []


    console.log('inside array from 2')

    console.log(database)
    let fname = document.getElementById('firstName').value
    let lname = document.getElementById('lastName').value
    let email = document.getElementById('email').value
    let password = document.getElementById('pwd').value
    let address = document.getElementById('address').value
    let city = document.getElementById('city').value
    let state = document.getElementById('state').value
    let res = document.getElementById('res') 

    let user = database.find(item => item.email === email)
    if (!user) {
        database.push({
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            address: address,
            city: city,
            state: state
        })
        res.innerText = "Successful Sign Up"
        
    } else {
        res.innerText = "User Already Exists"
    }

    e.preventDefault()

})


// Function to sign up user
function SignUp() {
    let database = []


    console.log('inside array from 2')

    console.log(database)
    let fname = document.getElementById('firstName').value
    let lname = document.getElementById('lastName').value
    let email = document.getElementById('email').value
    let password = document.getElementById('pwd').value
    let address = document.getElementById('address').value
    let city = document.getElementById('city').value
    let state = document.getElementById('state').value
    let res = document.getElementById('res') 

    let user = database.find(item => item.email === email)
    if (!user) {
        database.push({
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            address: address,
            city: city,
            state: state
        })
        res.innerText = "Successful Sign Up"
        
    } else {
        res.innerText = "User Already Exists"
    }
}