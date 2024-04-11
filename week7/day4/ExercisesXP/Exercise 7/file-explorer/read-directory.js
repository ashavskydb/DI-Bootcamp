const fs = require('fs');

const directoryPath = '/Users/mac/DI-Bootcamp/week7/day4/ExercisesXP/Exercise 7/file-explorer';


fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  
  console.log('Files in the directory:');
  files.forEach(file => {
    console.log(file);
  });
});
