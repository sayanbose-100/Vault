import fs from 'fs';

const logFile = (request, response, next) => {
    const date = new Date().toLocaleString();
    const log = `${date} ${request.url} ${request.method} \n`;
    fs.appendFile('./log.txt', log, (err, result) => {
        if(err) console.log(err.toString());
    });
    next();
}

export default logFile;