const figlet = require('figlet');

figlet("Hello World!!", function(err, data){

    if (err) {
        console.log("Something has wrong");
        console.error(err);
    }
    console.log(data);
});

// the file is loaded successfully