var express = require('express');
var cors = require('cors');
var app = express();
var bodyparser = require('body-parser');
app.use(cors());
app.use(bodyparser.json());
function rootCall(req,res){
    res.send('This is my first project!');
}
app.get('/', rootCall);
app.get('/fruits/banana', (req, res) => {
    res.send('I love bananas!');
});

user = [
    {name:'abul'},
    {name:'kabul'},
    {name:'sabul'}]
app.get('/users/:id',(req, res) => {
    res.send(user[req.params.id]);
})


app.post('/addUser',(req, res) => {
    console.log(req.body);
    res.send(req.body);
    
})
app.listen(3000, () => {console.log('listening on port 3000')});