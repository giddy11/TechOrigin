/* 
************************************************************************
*Write a Javascript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference
************************************************************************
*/

get_diff = (num)=>{
    if(num > 13)
        return Math.abs(13 - num) * 2

    return 13 - num
}

let res = get_diff(17)
let res2 = get_diff(6)

console.log(res)
console.log(res2)