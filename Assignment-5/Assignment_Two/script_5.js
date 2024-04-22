
let submitBtn = document.getElementById('submit')



submitBtn.addEventListener('click', NumSort)


function NumSort(){
    let numbers = document.getElementById('numInput').value
    let numbers_split = numbers.split(' ')
    let integers = numbers_split.map(str => parseInt(str));

    let len = integers.length
    let count = 0
    let temp = 0
    let len_temp = len
    for(let i = 0; i < len && count < len; count++){
        for(let j = 0; j < len_temp; j++){
            if(integers[j+1] < integers[j]){
                temp = integers[j+1]
                integers[j+1] = integers[j]
                integers[j] = temp
            }
        }
        len_temp--
    }
    return alert(`The highest number is: ${integers[len - 1]}`)
}