var express = require('express');

var app = express();

function rootCall(req,res){
    res.send('Hello World!');
}
app.get('/', rootCall)
app.listen(3000, () => {console.log('listening on port 3000')});