const express = require("express");
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000
const publicPath = path.join(__dirname, 'public')
const loginRouter = require('./routes/login.routes');
const doctorRouter = require('./routes/doctor.routes')
const transactionRouter = require('./routes/transaction.routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    try{
        res.sendFile(`${publicPath}/login.html`)
    }catch(err) {
        console.log(err)
    }
})

app.get('/index', (req, res) => {
    try{
        res.sendFile(`${publicPath}/index.html`)
    } catch(err) {

    }
})

app.use('/api', loginRouter)
app.use('/api', doctorRouter)
app.use('/api', transactionRouter)

app.listen(PORT, () => {
    console.log('App listening on 3000 port')
})