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
const winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
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
    // if((aMoves[0,1,2]=="X" ||"O")||(aMoves[3,4,5]=="X"||"O"){
    //     status.whoWon = aMoves[0];
    //     status.winningCombo =  [0,1,2]
    //     status.isWinner = true
    // }
    
     if (aMoves[0] == "X"  && aMoves[1] == "X" && aMoves[2] == "X" || (aMoves[0] == "O"&& aMoves[1] == "O" && aMoves[2] == "O")){
      
        status.whoWon = aMoves[0];
        status.winningCombo =  [0,1,2]
        status.isWinner = true

    }
    else if (aMoves[3] == "X" && aMoves[4] == "X" && aMoves[5] == "X" || (aMoves[3] == "O"&& aMoves[4] == "O" && aMoves[5] == "O")){
        
    status.whoWon = aMoves[3]
    status.winningCombo =  [3,4,5]
    status.isWinner = true

    }
    else if (aMoves[6] == "X"&& aMoves[7] == "X" && aMoves[8] == "X" || (aMoves[6] == "O"&& aMoves[7] == "O" && aMoves[8] == "O")){
        
    status.whoWon = aMoves[6]
    status.winningCombo =  [6,7,8]
    status.isWinner = true

    }
    else if (aMoves[0] == "X" && aMoves[3] == "X" && aMoves[6] == "X" || (aMoves[0] == "O"&& aMoves[3] == "O" && aMoves[6] == "O")){
        
    status.whoWon = aMoves[0]
    status.winningCombo =  [0,3,6]
    status.isWinner = true

    }
    else if (aMoves[1] == "X" && aMoves[4] == "X" && aMoves[7] == "X" || (aMoves[1] == "O"&& aMoves[4] == "O" && aMoves[7] == "O")){
        
    status.whoWon = aMoves[1]
    status.winningCombo =  [1,4,7]
    status.isWinner = true

    }
    else if (aMoves[2] == "X" && aMoves[5] == "X" && aMoves[8] == "X" || (aMoves[2] == "O"&& aMoves[5] == "O" && aMoves[8] == "O")){
        
    status.whoWon = aMoves[2]
    status.winningCombo =  [2,5,8]
    status.isWinner = true

    }
    else if (aMoves[2] == "X" && aMoves[4] == "X" && aMoves[6] == "X" || (aMoves[2] == "O"&& aMoves[4] == "O" && aMoves[6] == "O")){
        
        status.whoWon = aMoves[2]
        status.winningCombo =  [2,4,6]
        status.isWinner = true
    
        }
     else if (aMoves[0] == "X" && aMoves[4] == "X" && aMoves[8] == "X" || (aMoves[0] == "O"&& aMoves[4] == "O" && aMoves[8] == "O")){
        
            status.whoWon = aMoves[0]
            status.winningCombo =  [0,4,8]
            status.isWinner = true
        
            }




    res.json(status)

})

app.listen(port, () => {  
    console.log(`Example app listening on port ${port}!`) 
})