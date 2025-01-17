
import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12758207',
    password: 'HkQSah6hhj',
    database: 'information'
}).promise()


let textcontent = document.getElementById("textcontent");
let send = document.getElementById("send");

send.onclick = function() {
    let msg = textcontent.value
    if (msg.length > 0) {
        pool.query(`INSERT INTO information (message) VALUE (${msg})`)
        textcontent.value = "";
    }
}

