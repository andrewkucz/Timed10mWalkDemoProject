const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");
const dotenv = require("dotenv").config()

const PORT = process.env.PORT || 4000;
const dburi = process.env.DB_URI;

console.log(process.env);
console.log('dburi is ' + dburi );

mongoose.connect(dburi, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const recordRoutes = require('./routes/record.routes');
app.use('/api/records', recordRoutes);
const patientRoutes = require('./routes/patient.routes');
app.use('/api/patients', patientRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
