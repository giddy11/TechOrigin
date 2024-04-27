let symbols = ['+', '-', '/',  '*'];
let calc = '45+67';

let getOpIndex = TheIndexOf(calc, symbols);
console.log(getOpIndex);

let calc_split = [calc.slice(0, getOpIndex), calc.slice(getOpIndex + 1)];

console.log(calc_split);

let equal = Add(Number(calc_split[0]), Number(calc_split[1]));

console.log(equal);

function TheIndexOf(expression, operators){
    for (let i = 0; i < operators.length; i++) {
        if (expression.includes(operators[i]))
            return expression.indexOf(operators[i]);
    }
    return -1;
}

function Add(a,b){
    return a + b;
}
