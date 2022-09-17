const {readFile, writeFile} = require('fs');

readFile("./content/first.txt","utf-8", (err,result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/seconde.txt',"utf-8", (err,result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile(
            "./content/result-async.txt",
            `Here is the reality : ${first} ${second}`,
            (err,result) => {
                if(err){
                    console.log(err);
                    return
                }
                console.log(result);
        })
    });
})