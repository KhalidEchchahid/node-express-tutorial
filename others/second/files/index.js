
// const fs = require('fs');
//  fs = file system 
const fsPromises = require('fs').promises;
const path = require('path')





/*------------------------------------------------------------------------*/
/*
 ya ndiro ./starter.txt      or      path.join(__dirname , 'starter.txt')
 

ila bghina n7ydo tostring ndiro utf8         hna 
fs.readFile(path.join(__dirname, 'starter.txt'), (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

*/
/*------------------------------------------------------------------------

fs.writeFile(path.join(__dirname , 'reply.txt'),'writed by writeFile', (err) => {
   if (err) throw err;
   console.log('write completed');

   fs.appendFile(path.join(__dirname , 'reply.txt'), ' \n\n added by appendFile ' , (err , data)=>{
       if (err) throw err ;
       console.log('append completed')
    })

    
   fs.rename(path.join(__dirname , 'reply.txt'),path.join(__dirname , 'NewReply.txt'), (err , data)=>{
       if (err) throw err ;
       console.log('renme completed')
    })
})

------------------------------------------------------------------------*/



const fileOps = async () => {

    try {

        const data = await fsPromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8')
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, 'starter.txt'))
        await fsPromises.writeFile(path.join(__dirname, 'prosiseWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'prosiseWrite.txt'), '\nnice to meet you ')
        await fsPromises.rename(path.join(__dirname, 'prosiseWrite.txt'), path.join(__dirname, 'prosiseComplet.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'prosiseComplet.txt'), 'utf8')
        console.log(newData)

    } catch (err) {
        console.error(err);
    }
}

 fileOps();










// exit on aucaught errors
process.on('uncaughtExpception', err => {
    console.error(`there was an uncaught error : ${err}`);
    process.exit(1);
})