const fs = require('fs');

function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        } 
        callback(null, data);
    });
}

function writeFile(filePath, data, callback) {
    fs.writeFile(filePath, data, 'utf8', (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}