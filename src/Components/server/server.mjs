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

app.post('/add', (req, res) => {
    const q = "INSERT INTO calendarapi.scheduler (`Name`, `Event`, `Type`, `notes`, `time`, `date`) VALUES (?)"
    const values = [
        req.body.Name,
        req.body.Event,
        req.body.Type,
        req.body.notes,
        req.body.time,
        req.body.date,
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("Shit has been posted")
    })
});

const PORT = 7500;

app.listen(
    PORT, 
    () => console.log(`Running on ${PORT}`)
);