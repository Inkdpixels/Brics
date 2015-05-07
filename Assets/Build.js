var fs = require('fs');
var autoprefixer = require('autoprefixer-core');
var filePath = '/Dist/Styles/Main.css';

fs.readFile(__dirname + filePath, 'utf8', function(err, data) {
    if(err) {
        console.log(err);

        return false;
    }

    processAndWriteFile(data);
});

function processAndWriteFile(data) {
    var prefixedData = autoprefixer.process(data).css;

    fs.writeFile(__dirname + filePath, prefixedData, function(err) {
        if(err) {
            console.log(err)
            return false;
        }
    });
}

