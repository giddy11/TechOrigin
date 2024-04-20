/* 
************************************************************************
*Write a Javascript function that reverses a number.
************************************************************************
*/

let number_reverse = (num)=>{
       let rev_num = 0
       while(num > 0){
        rev_num = rev_num * 10 + num % 10
        num = Math.floor(num / 10)
       }
       return rev_num
}

let res = number_reverse(4562)
console.log(res)