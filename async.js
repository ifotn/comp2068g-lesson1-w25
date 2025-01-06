const fs = require('fs');

// 3rd param is our CALLBACK - what to do when readFile finishes
// readFile returns either an error or the file contents
const food = fs.readFile('food.txt', 'utf8', (err, fileContents) => {
    if (err) {
        console.log('Cannot find the food!');
    }
    else {
        console.log(fileContents);
    }  
});

console.log('We ate this stuff');

const drinks = fs.readFile('drinks.txt', 'utf8', (err, fileContents) => {
    console.log(fileContents);
});

console.log('We drank this stuff');