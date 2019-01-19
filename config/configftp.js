//donwload file
var Client = require('ftp');
var fs = require('fs');
var address = require('./address');

var c = new Client();

module.exports = {
    downloadFile: async (folderSource)=>{
        return new Promise((resolve, reject) => {
              c.on('ready', function () {
                c.list(folderSource, function (err, list) {
                    if (err) {
                        reject(err)
                        return;
                    }
                    for (let index = 0; index < list.length; index++) {
                        const element = list[index];
                        c.get(folderSource+'/' + element.name, function (err, stream) {
                            if (err) {
                                reject(err);
                                return;
                            }
                            stream.once('close', function () { c.end(); });
                            stream.pipe(fs.createWriteStream(element.name));
                            resolve()
                        });
                    }
                });
            
            
            });
            c.connect(address);

          })
    }
}



