const express = require("express");
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000
const publicPath = path.join(__dirname, 'public')

app.get('/', (req, res) => {
    try{
        res.sendFile(`${publicPath}/login.html`)
    }catch(err) {
        console.log(err)
    }
})

app.listen(3000, () => {
    console.log('App listening on 3000 port')
})