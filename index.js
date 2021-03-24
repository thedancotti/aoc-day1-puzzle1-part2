import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require('fs');

fs.readFile('./instructions.txt', (err, data) => {
    if(err) {
        console.log('can\'t read file');
    }

    const instructions = data.toString();
    let i = 0;
    let floor = 0;
    let position = 0;
    while (i < instructions.length) {
        if(instructions[i]==='('){
            floor++;
        }
        if(instructions[i]===')'){
            floor--;
        }
        if(floor === -1) {
            position = i + 1;
            break;
        }
        i++;
    }
    console.log('instructions: ', instructions);
    console.log('the first position when Santa enters the basement is:  ', position);
});