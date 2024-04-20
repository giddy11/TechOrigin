/* 
************************************************************************
*Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper 
case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox ‘
************************************************************************
*/

let convert_first_letter = (word)=>{
    let word_split = word.split(' ')

    for (let i = 0; i < word_split.length; i++){
        word_split[i] = word_split[i].charAt(0).toUpperCase() + word_split[i].slice(1)
    }
    return word_split.join(' ')
}

let res = convert_first_letter('the quick brown fox')
console.log(res)