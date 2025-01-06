// import node's filesystem library
const fs = require('fs');

const food = fs.readFileSync('food.txt', 'utf8');
console.log(food);
console.log('We ate this stuff');

const drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);
console.log('We drank this stuff');