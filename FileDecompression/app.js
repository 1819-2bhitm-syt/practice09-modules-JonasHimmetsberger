const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('compressed.txt'),
    crlfDelay: Infinity
});

let compressedLines = [];

rl.on('line', (line) => {
    //console.log(`Line from file: ${line}`);
    compressedLines.push(line);
});

function decompress(line) {
    let first = line.charAt(0);
    let length = line.substring(1, line.length);
    let unpacked = '';

    for (let i = 0; i < length; i++) {
        unpacked += first;
    }

    return unpacked;
}

rl.on('close', () => {
    for (line of compressedLines) {
        console.log(decompress(line));
    }
});