const fs = require('fs');


// read a file
// const file = fs.readFileSync('file1.txt');

// // console.log("file is readed " + file);


// // write the file
// // fs.writeFileSync("file2.txt","this is the second file!");
// // console.log("File has been written");

// // fs.appendFileSync("file3.txt","new data has been stored");
// // console.log("success");


// // Deleting the file

// fs.unlinkSync("file2.txt");

// console.log("The file has been deleted");

// fs.mkdirSync("myDirectory");

// let filePath = 'D:\\Scalar Node.js\\First\\myDirectory';

// let readDir = fs.readdirSync(filePath);

// console.log("Files Are :" , readDir);


// check the directory is exits or not

let exist = fs.existsSync('myDirectory');

console.log(exist);

