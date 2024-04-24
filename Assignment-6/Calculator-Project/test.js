let word = 'helll';
let len = word.length;

if (word[len - 1] == 'l'){
    console.log(1);
    word = word.slice(0, len - 1) + '';
}

console.log(word);
