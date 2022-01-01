// local = dont share
const secret = 'SUPER SECRET';
// shared
const john = 'john';
const peter = 'peter';

// console.log(module);  // see that module is an obj and see all its params ie:
// exports
module.exports = { john, peter } // now in other files can access these vars
  // need {} to use obj syntax if exporting multiple values
  