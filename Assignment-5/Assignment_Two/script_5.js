/* 
************************************************************************
*Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
Sample numbers : -5, -2, -6, 0, -1
Output : 0
************************************************************************
*/

let nums_sort = (nums)=>{
    let len = nums.length
    let count = 0
    let temp = 0
    let len_temp = len
    for(let i = 0; i < len && count < len; count++){
        for(let j = 0; j < len_temp; j++){
            if(nums[j+1] < nums[j]){
                temp = nums[j+1]
                nums[j+1] = nums[j]
                nums[j] = temp
            }
        }
        len_temp--
    }
    return nums
}


let nums = [-5,-2,-6,0,-1]
let res = nums_sort(nums)
let len = res.length
let max_num = res[len - 1]

console.log(res)
console.log(max_num)
