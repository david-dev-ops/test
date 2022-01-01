//modules = every file is a module by def
//CommonjS library used by node.js by def

const names = require('./names'); // where the module.export is found
  // dont need const names =  but to console.log() we do this
// or can destructure
const { john, peter } = require('./names');
const sayHi = require('./utils'); // dont need .js 
const data = require('./alternativeExportSyntax');
require('./mindGrenade');  // o/p = The sum is 15 ie: func auto runs, rtns and prints
  // because when import a module you actually are invoking it and since this module
  // is calling the function within the code, it runs upon import

console.log(names); // { john: 'john', peter: 'peter' }
console.log(data); // { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }
console.log(data.items[0]);
console.log(data.items[1]);
console.log(data.singlePerson.name);
sayHi('susan')
sayHi(names.john)  // access obj names and property john to get the value ie: { john: 'john', peter: 'peter' }
sayHi(names.peter)
sayHi(john) // the obj has been destructured so this accesses the properties value
sayHi(peter)
