const fs = require("fs");

const breedDetailsFromFile = (breed, callback) => {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf-8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) callback(data);
  });
};

const printCatBreed = (breed) => {
  console.log('Return Value: ', breed);
};

breedDetailsFromFile('Bombay', printCatBreed);
