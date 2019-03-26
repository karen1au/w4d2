const dh = require('./knex_script.js');

const firstname = process.argv[2];
const lastname = process.argv[3];
const birthday = process.argv[4];

dh.addPerson(firstname,lastname,birthday, function(err){
    if (err) { 
        console.log('error happen',err);
        return;
    }
    console.log('Added!');
    dh.close();
});
// console.log(birthday);