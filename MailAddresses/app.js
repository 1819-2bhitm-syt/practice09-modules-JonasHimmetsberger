console.log('-----------------------------');
console.log('email addresses');
console.log('-----------------------------');



const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('teachers.csv'),
    crlfDelay: Infinity
});

let compressedLines = [];

rl.on('line', (line) => {
    compressedLines.push(line);
    decompress(line);
}).on('close', () => {
    console.log('-----------------------------');
});

function decompress(line) {
    let firstName = line.charAt(0);
    let length = line.split(';');

    let lastName = length[1];
    console.log(getMailAddress(firstName, lastName));
}

function getMailAddress(firstName, lastName) {
    lastName = lastName.toLowerCase();
    firstName = firstName.toLowerCase();
    lastName = lastName.replace('ä', 'ae');
    lastName = lastName.replace('ö', 'oe');
    lastName = lastName.replace('ü', 'ue');

    return firstName + '.' + lastName + '@htl-leonding.ac.at';
}
