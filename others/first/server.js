// console.log('holle')
// console.log(global)
// const os = require('os');
// const path = require('path')
// console.log(os.type())
// console.log(os.version())
// cleaconsole.log(os.homedir())
// console.log(__dirname)
// console.log(__filename)
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))
//////////////////////////////////////////////////////////////////////////

// const math = require('./math'); 
//  Math.add
//  Math.sub

const {add , sub , mul , div } = require('./math');
console.log(add(2, 3))
console.log(sub(2, 3))
console.log(mul(2, 3))
console.log(div(2, 3))