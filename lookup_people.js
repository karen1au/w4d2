const dh = require('./test_script.js');

const name = process.argv[2];

dh.getPeopleByName(name, function(err, results){
    if (err) { console.log('error happen');}
    console.log(results.rows);
    console.log('Searching ...');
    console.log(`Found ${results.rows.length} person(s) by the name '${name}':`);
    results.rows.forEach(row => {
        console.log(`- ${results.rows.indexOf(row)+1}: ${row.first_name} ${row.last_name}, born '${row.birthdate}'`);
    });
    dh.close();
});