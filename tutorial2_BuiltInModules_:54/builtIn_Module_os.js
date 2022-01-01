const os = require('os'); // its a built in module so no path or install of mod needed
  // if know what method/property you want can use destructuring ie: const { } = 
const user = os.userInfo();
console.log(user);
console.log(`sys uptime in seconds ${os.uptime()}`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS);
console.log(os);