/* 
************************************************************************
*Write a Javascript program to construct the following pattern, using a nested for loop
************************************************************************
*/

function CreatePattern(num){
    for(let i = 0; i <= num; i++){
        for(let j = 0; j < i; j++){
            // console.log("*")
            process.stdout.write("*");
        }
        console.log()
    }
}

CreatePattern(5)