//donwload file
var Client = require('ftp');
var fs = require('fs');

var c = new Client();

var configAddress = {
    host: "10.242.231.196",
    user: "loadergaji",
    password: "gajiloader"
};

c.on('ready', function () {
    c.list('tes', function (err, list) {
        if (err) throw err;
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            // console.log(element.name)
            c.get('tes/' + element.name, function (err, stream) {
                if (err) throw err;
                console.log(stream)
                stream.once('close', function () { c.end(); });
                stream.pipe(fs.createWriteStream(element.name));
            });
            
        }
         
        
    });


});
c.connect(configAddress);
