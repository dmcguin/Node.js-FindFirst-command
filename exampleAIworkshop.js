const fs = require('fs');
const path = require('path');

if(process.argv.length !== 5){
  console.log(`Usage: node ${path.basename(__filename)} PATTERN FILENAME NUMBER_OF_LINES`);
  return;
}
//console.log([process.argv[4],process.argv[2],process.argv[3]])
let filename  = process.argv[3];
let pattern = process.argv[2];
let nlines = Number(process.argv[4]);

if(!fs.existsSync(filename)){
  console.log(`${filename}: No such file or directory exists`);
  return;
}

if(isNaN(nlines)|| nlines <0){
  console.log(`${filename}: NUMBER_OF_LINES is not a number`);
}

let content = fs.readFileSync(filename, `utf-8`);
let lines = content.split('\n');

let limit = lines.length >= nlines ? nlines: lines.length;
for(let i=0;i<limit;i++){
  if(lines[i].includes(pattern)){
    console.log(lines[i]);
  }
}