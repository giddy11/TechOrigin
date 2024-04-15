/* 
************************************************************************
*Write a Javascript program to check whether a given positive number is a multiple of 3 or 7
************************************************************************
*/

is_num_multiple_of_three_or_seven = (num)=>{
    if(num % 3 == 0 || num % 7 == 0)
        return true

    return false
}

let res = is_num_multiple_of_three_or_seven(3)
let res2 = is_num_multiple_of_three_or_seven(8)
let res3 = is_num_multiple_of_three_or_seven(28)


console.log(res)
console.log(res2)
console.log(res3)
