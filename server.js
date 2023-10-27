const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 4000
//npm i body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/name', (req, res) =>{
                        //gets first name from query
    res.send('Hello: '+req.query.fname+" "+ req.query.Sname);
})

app.post('/name',(req, res)=>{
    res.send('Hello ' + req.body.fname + ' ' +req.body.Sname);
})



//req short for request, res short for responce
//gets info 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/whatever',(req, res) =>{
    res.send("GoodBye!");
})

app.get('/DataRep',(req, res) =>{
    res.send("“Welcome to Data Representation & Querying”!");
})

app.get('/hello/:name', (req, res)=>
{                       //gets data from parameters
    res.send("Hello " + req.params.name);
})
//inside square brakets is array
app.get('/api/books', (req, res)=>{

    const data = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ]
        
        
    res.json({
        cathals_books:data,
        "Message":"Hello from server.js"
    })
})


app.get('/test', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
})

//note!



//listens to command
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})