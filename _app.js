/*
     Source of information 
     https://expressjs.com/en/starter/static-files.html
     https://expressjs.com/en/starter/hello-world.html
*/


const express = require('express')
const app = express()
const port = 3000
const winningComboO = [
        "OOO345678",
        "012OOO678",
        "012345OOO",
        "O12O45O78",
        "0O23O56O8",
        "01O3O5O78",
        "O123O567O"
   // ["O","O","O","3","4","5","6","7","8"],
    //['O','O','O',3,4,5,6,7,8]
    //[3,4,5],
    // [6,7,8],
    // [0,3,6],
    // [1,4,7],
    // [2,5,8],
    // [2,4,6],
    // [0,4,8]
]
const winningComboX = [
    "XXX345678",
    "012XXX678",
    "012345XXX",
    "X12X45X78",
    "0X23X56X8",
    "01X3X5X78",
    "X123X567X"
]

app.use(express.static('public'))

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
     
      for(let i = 0;i<7;i++)
    {
       if(moves == winningComboO[i])
       {
           status.whoWon = "O";
          // let combo = 'Winning Combo : ';
           for(let i = 0;i<aMoves.length;i++)
           {
               if(aMoves[i]=='O')
               {
                status.winningCombo.push(i);
               }


           }
           status.isWinner = true;
       }

       else if(moves == winningComboX[i])
       {
           status.whoWon = "X";
           for(let i = 0;i<aMoves.length;i++)
           {
               if(aMoves[i]=='X')
               {
               status.winningCombo.push(i);
               }
           }
           status.isWinner = true;
       }
    }
    
    res.json(status)

})

//listening to port 3000 
app.listen(port, () => {  
    console.log(`Example app listening on port ${port}!`) 
})
