'use strict'

// filter
const names = ['Ivan', 'Ann', 'Oleg', 'maria','matra'];

const shortNames = names.filter(function (name) {
    return name.length < 5;
});

console.log(shortNames);

// map

const answers = ['IvaN','aNna', "Hello"];

const result = answers.map(i => i.toLowerCase());

console.log(result);