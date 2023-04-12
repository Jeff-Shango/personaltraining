import express from "express";
import mysql from "mysql2";
import cors from "cors";
const app = express();

const dbA = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "baltimore",
    database: "calendarapi"
})

const dbB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "baltimore",
    database: "Personal_Training_Tracker"
})

app.use(express.json())
app.use(cors())

app.get('/list', (req, res) => {
    const q = "SELECT * FROM calendarapi.scheduler";
    dbA.query(q, (err, data) => {
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

    dbA.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("Shit has been posted")
    })
});

// list of personal training inputs 
app.get('/paymentbreakdown', (req, res) => {
    const q = "SELECT * FROM Personal_Training_Tracker.payment_breakdown";
    dbB.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

// posting information onto Personal_Training_Tracker database 
app.post('/paymentbreakdown', (req, res) => {
	const q = "INSERT INTO Personal_Training_Tracker.payment_breakdown"
    const values = [
        req.body.customer_id,
        req.body.session_id,
        req.body.payment_description,
    ]

    dbB.query(q,[values], (err, data) => {
        if(err) return res.json(err)
        return res.json("shit has been updated")
    })
})

const PORT = 7500;

app.listen(
    PORT, 
    () => console.log(`Running on ${PORT}`)
);