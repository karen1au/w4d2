
const settings = require("./settings"); // settings.json

module.exports = (function(){

const pg = require("pg");
    
const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  } else {
    return console.log('Connected to test!');
  }
});

function getPeopleByName (name, callback){
    client.query(`SELECT first_name,last_name,to_char( birthdate, 'YYYY-MM-DD') AS birthdate 
    FROM famous_people WHERE first_name LIKE concat('%',$1::text,'%')`, [name], callback );
}


function close(){
    client.end();
}

return {
    
    getPeopleByName: getPeopleByName,
    close: close

}

})();