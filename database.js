import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '',
    user: '',
    password: '',
    database: ''
}).promise();

const result = await pool.query("SELECT * FROM information");
console.log(result);

let textcontent = document.getElementById("textcontent");
let send = document.getElementById("send");

send.onclick = function() {
    let msg = textcontent.value
    if (msg.length > 0) {
        pool.query(`INSERT INTO information (message) VALUE (${msg})`)
        textcontent.value = "";
    }
}

