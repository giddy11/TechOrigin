// synchronous functions - happens immediately
// asynchronious functions - happen in the future
function LogTTDS_Student(name){
    console.log("====================")
    console.log(`Hello ${name}`)
}
LogTTDS_Student("Joy")

let val = (value)=> console.log(value)
// setTimeout(()=>LogTTDS_Student("Gideon"),5000)// time is in milliseconds 10-3
// setTimeout(LogTTDS_Student,10000)
// setTimeout(val("Gideon"), 6000)
setTimeout(()=> val("Gideon"), 2000)
// setTimeout(()=>LogTTDS_Student("Daniel"),5000)// time is in milliseconds 10-3
console.log("This is the end")

async function asyncFunc(){
    // Would produce result in the future
    // Promise - Response JS Async function gives
    let promise=await jsPromise()
    console.log(promise*12)
}

// let asyncAnnFunc=async ()=>{
//     // Would produce result in the future
// }

async function jsPromise(){
    return 4
}
setTimeout(()=>asyncFunc(), 10000)
console.log("The end")

let array_object=[
    {
        id:0,
        name:"TTDS",
        type:"Software Development"
    },
    {
        id:1,
        name:"BuildersDeck",
        type:"Technology Consulting"
    },
    {
        id:2,
        name:"MyHospitul",
        type:"Technology Development"
    },
    {
        id:3,
        name:"BookSeven",
        type:"Productivity & Utility"
    }
]

// console.log("============")
// item=array_object.find((predicate)=>{
//     let foundItem=predicate.id==1
//     return foundItem
// })
// console.log(item)

// items=array_object.filter((predicate)=>{
//     let foundItem=predicate.id>1
//     return foundItem
// })
// console.log(items)
// console.log("============")
// items=array_object.filter((predicate)=>predicate.id>1)
// console.log(items)

//map - Transform a object by going through all the elements & can return a response
// newArray=array_object.map((_element_)=>{
//     _element_.id+=1
//     return _element_
// })
// console.log(array_object)
// console.log(newArray)
// console.log("============")
// //forEach -  Transform a object by going through all the elements but without response
// array_object.forEach((element)=>{
//     element.id+=1
// })
// console.log(array_object)


// let map_array = array_object.map((value)=> {
//     value.id++
//     return value
// })
// console.log(array_object)
// console.log("=========================")
// console.log(map_array)

// array_object.forEach((value)=> {
//     value.name += " hi"
//     value.type += " ok"
// })

// console.log(array_object)