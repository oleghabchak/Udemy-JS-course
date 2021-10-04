'use strict'

// filter
const names = ['Ivan', 'Ann', 'Oleg', 'maria','matra'];

const shortNames = names.filter(function (name) {
    return name.length < 5;
});

console.log(shortNames);


// map

let answers = ['IvaN','aNna', "Hello"];

answers = answers.map(i => i.toLowerCase());

console.log(answers);


// ewery/some

const some = [4, 'sdefrsdf', 'h45kk' ];

console.log(some.some(i => typeof(i) === 'number'));
console.log(some.every(i => typeof(i) === 'number'));


// reduce

const arr = [4,5,1,2,6];
                // 0 + 4
                // 4 + 5
                // 9 + 1
const res = arr.reduce((sum,cur) => sum + cur, 1000);
console.log(res);


const str = ['apple', 'reap', 'pear'];

const result = str.reduce((sum,cur) => `${sum}, ${cur}`);
console.log(result, str);


// example

const obj = {
    ivan: 'persone',
    oleg: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(i => i[0]);
console.log(newArr);