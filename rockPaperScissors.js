// Function rock paper scissors which takes the throw of player1 and the throw of player 2. A can have the value of 'rock', 'paper', or 'scissors'. 
// It will return 'player1' if player1 wins, and 'player2' if player2 wins...and draw if there is no winner.

function rockPaperScissor(player1Move, player2Move){
    const moves = ['rock', 'paper', 'scissors'];
    let player1Index;
    let player2Index;
    for (let possibleMoves = 0; possibleMoves < moves.length; possibleMoves++){
        if (player1Move === moves[possibleMoves]){
            player1Index = possibleMoves;
        }
        if (player2Move === moves[possibleMoves]){
            player2Index = possibleMoves;
        }
    }
    if (player1Index === 2 && player2Index === 0){
        return 'player2 won';
    } else if (player2Index === player1Index + 1){
        return 'player2 won';
    } else if (player2Index === player1Index){ 
        return 'draw';
    }else {
        return 'player1 won';
    }
}

console.log(rockPaperScissor('paper', 'paper'));