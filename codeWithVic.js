/**
 *   0     1    2      3
 * ["i", "am", "a", "girl"]
 * 
 * let firstLetter = word[0].toUpperCase()
 * let letter = firstLetter + word.slice(1,5)
 * 
 * use a lop to perform  the above operation for the list
 * 
 *   0     1    2      3
 * ["I", "Am", "A", "Girl"]
 * 
 * with the join method we et the following result
 * I Am A Girl
 */

let sentence = 'i am a girl' //'i ', 'm ', ' girl'

let result = sentence.split(' ')
// console.log(result[1][1])

for (let i = 0; i < result.length; i++){

    result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1)
    console.log(result)
}
// console.log(result)


// result.forEach((word, index)=>{
//     // if (index != 0)
//         result[index] = word.charAt(0).toUpperCase() + word.slice(1)

// })



// for (let i = 0; i < result.length; i++){

//     let firstLetter = result[0][i].toUpperCase()

//     let letter = firstLetter + result.slice(i+1)
// }

// let test = ['victory', 'gideon', 'mobe']
// let printOut = test[0][2]

// console.log(result.join(' '))


let word = 'i am a girl' // I Am A Girl

let firstLetter = word[0].toUpperCase()

// let letter = firstLetter + word.slice(1,5)

// console.log(letter)
