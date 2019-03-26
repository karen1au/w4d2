const settings = require("./settings"); // settings.json

module.exports = (function(){
const pg = require("pg");
var knex = require('knex')({
    client: 'pg',
    connection: {
        host : settings.hostname,
        user : settings.user,
        password : settings.password,
        database : settings.database
    }
    });


function getPeopleByName (input, callback){
    knex.select(knex.raw("first_name,last_name,to_char( birthdate, 'YYYY-MM-DD') AS birthdate"))
        .from('famous_people').where(knex.raw("first_name LIKE concat('%',:name::text,'%')",{name:input}))
        .asCallback(callback);
}

function addPerson (first, last, date, callback){
    knex.insert([{first_name: first, last_name: last, birthdate: date}])
    .into('famous_people').asCallback(callback);
}




function close(){
    knex.destroy();
}

return {
    addPerson: addPerson,
    getPeopleByName: getPeopleByName,
    close: close

}

})();