/* 
************************************************************************
*Write a Javascript program to count the number of vowels in a given string
************************************************************************
*/

let vowels_list = ["a", "e", "i", "o", "u"]
num_of_vowels = (words)=>{
    let count = 0
    let to_lower_case = words.toLowerCase()
    for(let i = 0; i < to_lower_case.length; i++){
        if(vowels_list.includes(to_lower_case[i]))
            count++
    }
    return count
}

let res1 = num_of_vowels("hEllo sir")

console.log(res1)
