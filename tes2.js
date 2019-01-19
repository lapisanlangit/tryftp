//donwload file
var Client = require('ftp');

var fs = require('fs');

var c = new Client();

var configAddress = {
    host: "10.242.231.196",
    user: "loadergaji",
    password: "gajiloader"
};

c.on('ready', function() {
  c.get('037/2018/14_20180131160351.pdf', function(err, stream) {
    if (err) throw err;
    stream.once('close', function() { c.end(); });
    stream.pipe(fs.createWriteStream('2_14_20180131160351.pdf'));
  });
});
c.connect(configAddress);