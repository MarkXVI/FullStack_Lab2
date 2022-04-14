const express = require('express');
const app = express();
const cors = require('cors');

const signale = require('signale');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    signale.success('Connected to the database!');
});

const api = require('./routes/api');
const admin = require('./routes/admin');

app.use(express.json());
app.use(cors());

app.use(express.static('../../dist/'));
app.use("/api", api);
app.use("/admin", admin);

app.listen(PORT, () => {
    signale.info(`Sever listening on port: ${PORT}`);
});
