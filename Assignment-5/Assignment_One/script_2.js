/* 
************************************************************************
*Write a Javascript program to to compute the sum of the two given integers. If the 2 values are the same, then return triple their sum.
************************************************************************
*/

sum_or_triple = (num1, num2)=>{
    if(num1 == num2)
        return (num1 + num2) * 3

    return num1 + num2
}

let res = sum_or_triple(4,4)
let res2 = sum_or_triple(3,4)

console.log(res)
console.log(res2)