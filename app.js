require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = "mongodb+srv://kozak:kozak@cluster0.hmsow.mongodb.net/auth_roles?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

async function start() {
    try {
        await mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => {
            console.log(`server has been started on ${PORT} port`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();