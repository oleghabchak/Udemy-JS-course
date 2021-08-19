const fs = require('fs');
const path = require('path');
const util = require('util');


const boysRoute = path.join(__dirname, 'boys' );
const girlRoute = path.join(__dirname, 'girls');

const arr = [boysRoute , girlRoute]
const readFile = util.promisify(fs.readFile);
const readFilePromise = util.promisify(fs.readdir);
const renameFSPromise = util.promisify(fs.rename);

const oldPath = path.join(__dirname, 'boys', 'maria.txt')
const newPath = path.join(__dirname, 'girls', 'maria.txt')

const sortting = readFilePromise(boysRoute).then(data => {
    console.log(data);

    data.forEach(file => {
                
                console.log(file);
    
});
})

readFile(girlRoute).then(data => {
let a = JSON.parse(data.toString());
    if (a.gender == 'male') {
        console.log('OK');
    }
});

renameFSPromise(oldPath,newPath).catch(err => {
    console.log(err);
});




