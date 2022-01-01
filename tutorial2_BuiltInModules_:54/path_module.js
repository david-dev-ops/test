const path = require('path');

console.log(path.sep) // rtns / = the symbol to seperate os paths
const filePath = path.join('/tutorial2', 'builtIn_Module_os.js');
console.log(filePath); //  = /tutorial2/builtIn_Module_os.js
console.log(path.basename(filePath)); // = builtIn_Module_os.js

const absolutePath = path.resolve(__dirname,'tutorial1', 'names.js' ); // __dirname means 'what dir the file is found in'
console.log(absolutePath); // = /home/me/john-smilga_FCC_8HR/tuturial2_BuiltInModules/tutorial1/names.js



