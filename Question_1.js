// Blocking Code Example
const fs = require('fs');

// Read a file synchronously (Blocking)
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data); // Will wait until the file is read before executing


// Non-blocking Code Example
const fs = require('fs');

// Read a file asynchronously (Non-blocking)
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // This will run after file is read
});

console.log('This will print first, non-blocking execution');
