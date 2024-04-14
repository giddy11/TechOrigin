// // prints multiplication table (2) 100 (Esohe)
// for(let i = 1; i <= 100; i++){
//     let res = 2 * i
//     console.log(`2 * ${i} = ${res}`)
// }


// //grading System Function - 0-39 -F, 40-69 - Okay, 70 and above - Excellent
// let checkGrade = (score)=>{
//     switch(true){
//         case score >= 70:
//             console.log("Excellent")
//             break;
//         case score >= 40:
//             console.log("Okay")
//             break;
//         default:
//             console.log("F")
//             break;
//     }
// }

// checkGrade(22)

// // Hello World - Extract only orl & ello  Barikpe
// let word = "Hello World"
// let extract_orl = word.slice(7, 10)
// let extract_ello = word.slice(1, 5)
// let concat_orl_ello = extract_orl.concat(extract_ello)

// console.log(concat_orl_ello)

// 1-100, create a list and multiple value in the list by 3
let listOne = []
for (let i=1;i<=100;i++){
    if(i%2==0){
        listOne.push(i)
    }
}

// listOne.forEach((item)=> item * 3)
listOne.forEach((item, index, array) => {
    array[index] = item * 3;
});

// let listItem = listOne.map((item)=> item * 3)


console.log(listOne)