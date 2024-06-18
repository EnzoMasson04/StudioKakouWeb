import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();


const app = express();
app.use(cors());
const port = 3000;

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


app.get('/api/players', (req, res) => {
    connection.query('SELECT * FROM player', (err, rows) => {
        if (err) throw err;
        res.json(rows);
        console.log(rows);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});