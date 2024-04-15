/* 
************************************************************************
*Write a Javascript program to create another string by adding "py" in front of a given string. If the given string begins with "py" return the original string
************************************************************************
*/

add_py_to_string = (sentence)=>{
    if(sentence[0] == "p" && sentence[1] == "y")
        return sentence

    return "py" + sentence
}

let res = add_py_to_string("Hello world")
let res2 = add_py_to_string("pyhello")

console.log(res)
console.log(res2)