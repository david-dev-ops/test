// built in module fs can be syncronous or non sync
// syncronous first

const { readFileSync, writeFileSync } = require('fs'); // destructure these methods with {}
/* 
 Note: or do const fs = require('fs'); and to access =  fs.readFileSync
*/
console.log('starting');
const first = readFileSync('../tutorial1_until_54_minutes/first.txt', 'utf-8'); // utf is default 
const second = readFileSync('../tutorial1_until_54_minutes/second.txt', 'utf-8'); // utf is default 

console.log(first, second);
// 1st is file name and created if doesnt exist and overwrites by def 2nd is value we want to pass , here its the 2 text files
writeFileSync('../tutorial1_until_54_minutes/result-sync.txt' ,`Here is result: ${first}, ${second}`)
// o/p to new file is = Here is result: this is some text, this is text for second file

// if want to append to the file, need a 3rd parameter with property flag and a = append
writeFileSync('../tutorial1_until_54_minutes/result-sync.txt' ,`Here is result: ${first}, ${second}`, { flag: 'a' })
console.log('finished this task');
console.log('starting next task');
// NOTE: very important, js reads a syncronous file line by line so if one user is using this program and taking a long time - no other user can use it = the app is 'down'
/*
o/p:
starting
this is some text this is text for second file
finished this task
starting next task

see this program is run in order so not avail to another user until 1st user done
*/ 