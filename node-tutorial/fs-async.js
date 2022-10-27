const { readFile, writeFile } = require('fs')

readFile('./content/subfolder/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = data;
    readFile('./content/subfolder/second.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        const second = data;

        writeFile('./content/result-async.txt', `\n here is the result : ${first} , ${second} `, (err) => {
            if (err) {
                console.log(err);
                return;
            }
        })
    })

})