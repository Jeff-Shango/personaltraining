import express from "express";
import mysql from "mysql2";
import cors from "cors";
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "baltimore",
    database: "calendarapi"
})

app.use(express.json())
app.use(cors())

app.get('/list', (req, res) => {
    const q = "SELECT * FROM calendarapi.scheduler";
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

const PORT = 7500;

app.listen(
    PORT, 
    () => console.log(`Running on ${PORT}`)
);