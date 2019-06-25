const express = require('express')
const bodyParser = require('body-parser')
const { sendEmail } = require('./services/sendEmail')

const app = express()
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', (req, res) => {
    res.json({message: 'Allgame api'})
})

app.post('/send/email', urlencodedParser, (req, res) => {
    const email = {
        to: req.body.to,
        from: req.body.from,
        subject: req.body.subject,
        text: req.body.text,
        html: req.body.html
    }
    try{
        sendEmail(email)
        res.status(200).json({message: 'sended'})
    } catch(err) {
        console.log(err)
        res.status(500).json({error: err})
    }
 
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Running at port 3000')
})
