const dh = require('./knex_script.js');

const name = process.argv[2];

dh.getPeopleByName(name, function(err, results){
    if (err) { 
        console.log('error happen',err);
        return;
    }
    // console.log(results);
    console.log('Searching ...');
    console.log(`Found ${results.length} person(s) by the name '${name}':`);
    results.forEach((row, index) => {
        console.log(`- ${index+1}: ${row.first_name} ${row.last_name}, born '${row.birthdate}'`);
    });
    dh.close();
});