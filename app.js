const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 80
const dbPort = 27017

app.use(express.static('build'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req,res,err)=>{
    res.sendFile('index.html');
})

app.listen(port, () => {
    console.log(port + '번 포트에서 대기중')
})