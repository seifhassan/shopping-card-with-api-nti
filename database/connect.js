const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://seif:GKtFVA5E47gU6xut@cluster0.vq7xg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
mongoose.connection.on('connected', () => {
    console.log("Connected to database")
})
mongoose.connection.on('error', (err) => {
    console.log("Database connection error => ", err)
})