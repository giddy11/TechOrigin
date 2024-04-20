/* 
************************************************************************
*Write a JavaScript function to get the number of occurrences of each letter in a specified string.
************************************************************************
*/

let word = "hello sir"

function GetUniqueLetter(word){
    let dict = []
    for (let i = 0; i < word.length; i++){
        if (!dict.includes(word[i]))
            dict.push(word[i])
    }

    return dict
}

function CountLetters(word, dict){
    let no_of_occurence = 0
    for (let i = 0; i < dict.length; i++){
        for (j = 0; j < word.length; j++){
            if (dict[i] == word[j])
                no_of_occurence++
        }
        if (dict[i].match(/[a-zA-Z]/))
            console.log(`Number of Occurence for letter ${dict[i]} = ${no_of_occurence}`)

            no_of_occurence = 0
    }
}

let number_of_occurence = (word)=>{
    let word_to_lower = word.toLowerCase()
    let dict = GetUniqueLetter(word_to_lower)
    CountLetters(word_to_lower, dict)
}

number_of_occurence(word)