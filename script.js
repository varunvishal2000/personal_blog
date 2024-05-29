const express = require('express');

const app = express();
const port = 3000

function usernameMiddleware(req, res, next){
    const email = req.headers.email
    const password = req.headers.password

    if(email != "varunvishal2000@gmail.com" || password != "v1478"){
        res.status(403).json({
            "msg": "Username or password incorrect"
        })
    }

    else {
        next();
    }
}

app.use(express.json())

app.post('/home', usernameMiddleware, function(req, res, next){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length 

    res.send("You have " + kidneyLength + " kidneys")
})




app.listen(port);