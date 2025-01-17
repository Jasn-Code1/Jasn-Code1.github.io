import mysql from 'mysql2';
// Client-side (browser)
fetch('/api/data') // Make a request to your server endpoint
   .then(response => response.json())
   .then(data => {
       // Process the data from the server
       console.log(data);
       // Update your webpage with the data
   });


// Server-side (Node.js with Express)
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
   // ... your MySQL connection details
    host: 'sql12.freesqldatabase.com',
    user: 'sql12758207',
    password: 'HkQSah6hhj',
    database: 'information'
});

let textcontent = document.getElementById("textcontent");
let send = document.getElementById("send");

send.onclick = function() {
    let msg = textcontent.value
    if (msg.length > 0) {
        app.get('/api/data', (req, res) => {
            connection.query(`INSERT INTO information (message) VALUE (${msg})`)
        }
        textcontent.value = "";
    }
}

