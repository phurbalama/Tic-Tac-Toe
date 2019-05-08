/*
     Source of information 
     https://expressjs.com/en/starter/static-files.html
     https://expressjs.com/en/starter/hello-world.html
*/
/*
147 258 369
753 159
*/

const express = require('express')
const app = express()
const port = 3000
const path = require('path');

// All the winning combinations specified by their index
const winners = [ 

    {p1: 0, p2: 1, p3: 2},
    {p1: 3, p2: 4, p3: 5},
    {p1: 6, p2: 7, p3: 8},
    {p1: 0, p2: 3, p3: 6},
    {p1: 1, p2: 4, p3: 7},
    {p1: 2, p2: 5, p3: 8},
    {p1: 0, p2: 4, p3: 8},
    {p1: 2, p2: 4, p3: 6},
    ]

app.use(express.static('public'))

app.get('/',(req,res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + 'index.html'));
})

app.get('/hello', (req, res) =>  {
    res.send('Hello World!')
})

app.get('/author', (req, res) =>  {
    res.json({"author" : "peter.parker"})
})

// http://localhost:3000/tictactoe?moves=012345678
app.get('/tictactoe', (req, res ) => {

    var status = {
        whoWon: "?",
        winningCombo: [],
        isWinner: false
    }

    // logic to determine a winner
    let moves = req.query.moves
    let aMoves = moves.split("");

     //returns if the index of p1 p2 p3 are equal and not ?
    winners.find(e=> {
        if(aMoves[e.p1]==aMoves[e.p2] && aMoves[e.p2]== aMoves[e.p3] && aMoves[e.p1] != "?")
        {
            
             // if statement to assign if the current winning combo is O or X
            status.whoWon =  (aMoves[e.p1] == "X") ? "X" : "O"
            status.winningCombo = [e.p1,e.p2,e.p3]
            status.isWinner = true
        }
       
    })

    res.json(status)

})

app.listen(port, () => {  
    console.log(`Example app listening on port ${port}!`) 
})
