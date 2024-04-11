const { readFile, writeFile } = require('./fileManager');

readFile('Hello World.txt', (err, data) => {
    if (err) {
        console.log('Error reading file', err);
        return;
    }
    console.log('Content for reading in "Hello World.txt":', data);

    writeFile('Bye World.txt', 'Writing to the file', (err) => {
        if (err) {
            console.log('Error writing to file', err);
            return;
        }
        console.log('Content for writing in "Bye World.txt":', 'Writing to the file');
    });
});