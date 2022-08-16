const fs = require('fs');
const path = require('path');

function copyFile() {
    let fileName = path.join(__dirname, 'sampleText.txt');
    let dstFileName = path.join(__dirname, '..','copiedFile.txt');
    console.log('fileName = ', fileName);
    console.log('dstFileName = ', dstFileName);

    fs.copyFile(fileName, dstFileName, (err) => {
        if (err) 
            throw err;
        console.log(`\nTransfer of ${fileName} to ${dstFileName} Successful!\n`);
    })
    
}

function copyDirectory() {
    const srcDirectory = path.join(__dirname, 'CentrisFtp');
    const dstDirectory = path.join(__dirname, '..','TestDir');

    console.log('Source Directory', srcDirectory);
    console.log('Destination Directory', dstDirectory);

    const files = fs.readdirSync(srcDirectory);
    console.log('List of files = ', files);

    files.map((file) => {
        console.log('file = ', file);
        let srcFileName = path.join(srcDirectory, file);
        let dstFileName = path.join(dstDirectory, file);
        fs.copyFile(srcFileName, dstFileName, (err) => {
            if (err)
                throw err;
            console.log(`Transfer ${file}: Success!`);
        })

    })

}
// copyFile();
copyDirectory();