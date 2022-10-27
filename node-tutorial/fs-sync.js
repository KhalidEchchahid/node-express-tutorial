const {readFileSync , writeFileSync} = require ('fs')

const first = readFileSync('./content/subfolder/first.txt', 'utf8')
const second = readFileSync('./content/subfolder/second.txt', 'utf8')
console.log(first,second)

writeFileSync(
    './content/result-sync.txt' ,
     `\n here is the result : ${first} , ${second} ` , {flag : 'a'}
)
// flag : 'a'  ->  kat3eni ajouter bla matmsse7