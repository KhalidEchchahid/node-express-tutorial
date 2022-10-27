const { readFile, writeFile } = require('fs').promises
const { reject } = require('lodash')
const { resolve } = require('path')
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFile('./content/subfolder/first.txt')
        const second = await readFile('./content/subfolder/second.txt')
        await writeFile('./content/result-mind-grenade.txt', `\n THIS IS AWSOME : ${first} ${second}`, { flag: 'a' })
    } catch (error) {
        console.log(error)
    }
}


start()



// this code is the same as fs-async but it is much cleaner
/*
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const start = async () => {
    try {
        const first = await getText('./content/subfolder/first.txt')
        const second = await getText('./content/subfolder/second.txt')
    } catch (error) {
        console.log(error)
    }
}
start()

*/

