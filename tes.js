//connect and list file
var Client = require('ftp');
 
  var c = new Client();
  
  var configAddress = {
    host: "10.242.231.196",
    user: "loadergaji",
    password: "gajiloader"
};

  c.on('ready', function() {
    c.list('037/2018',function(err, list) {
      if (err) throw err;
    //   console.dir(list[0].name);
        // console.dir(list.length);
      c.end();
    });
  });
  // connect to localhost:21 as anonymous
  c.connect(configAddress);