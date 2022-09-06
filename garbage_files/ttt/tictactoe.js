// import { findBestMove } from './minimax.js';
// import './tictactoe.css';

console.log('hello world');


const minimax_functions = (function(){
    //computer is player
    let player = 'o';

    //person playing the game interactively is the computer's opponent;
    let opponent = 'x';
    const isMovesLeft = function(board){
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (board[i][j] == "_"){
                    return true
                }
            }
        }
        return false;
    };
    const eval = function(b){
        if (b[0][0]==b[1][1]&&b[1][1]==b[2][2]){
            if (b[0][0]==player){
                return 1
            }else if (b[0][0]==opponent){
                return -1
            }
        }
        if (b[2][0]==b[1][1]&&b[1][1]==b[0][2]){
            if (b[0][0]==player){
                return 1
            }else if (b[0][0]==opponent){
                return -1
            }
        } 
        for (let row = 0; row < 3; row++){
            if (b[row][0]==b[row][1]&&b[row][1]==b[row][2]){
                if (b[row][0]==player){
                    return 1
                }else if (b[row][0]==opponent){
                    return -1
                }
            }
        }
        for (let col = 0; col < 3; col++){
            if (b[0][col]==b[1][col] && b[1][col]==b[2][col]){
                if (b[0][col]==player){
                    return 1
                }else if (b[0][col]==opponent){
                    return -1
                }
            }
        }
        return 0
    }
    const minimax = function(board, depth, isMax){
        let score = eval(board);
        if (score==1){return score;}
        if (score==-1){return score;}
        if (!isMovesLeft(board)){
            return 0;
        }
        if (isMax){
            var best = -1000;
            for (let i = 0; i < 3; i++){
                for (let j = 0; j < 3; j++){
                    if (board[i][j] == "_"){
                        board[i][j] = opponent;
                        best = Math.max(best, minimax(board, depth+1, !isMax))
                        board[i][j] = "_";
                    }
                }
            }
            return best
        }else{
            var best = 1000;
            for (let i = 0; i < 3; i++){
                for (let j = 0; j < 3; j++){
                    if (board[i][j]=="_"){
                        board[i][j] = opponent;
                        best = Math.min(best, minimax(board, depth+1, !isMax))
                        board[i][j] = "_";
                    }
                }
            }
            return best;
        }
    }
    const findBestMove = function(board){
        bestVal = -1000;
        bestMove = [-1,-1];
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (board[i][j] == "_"){
                    board[i][j] = player;
                    moveVal = minimax(board, 0, false);
                    board[i][j] = "_";
                    if (moveVal > bestVal){
                        bestMove = [i,j];
                        bestVal = moveVal
                    }
                }
            }
        }
        return bestMove;
    };
    const board = [];
    const setOrig = function(){
        for (let i = 0; i < 3; i++){
            let temp = [];
            for (let j = 0; j < 3; j++){
                temp.push("_");
            }
            board.push(temp);
        };
    };
    setOrig(board);
    const resetboard = function(){
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                board[i][j] = "_";
            }
        }
    };
    const getBoardPosition = function(num){
        let x = Math.floor(num / 3);
        let y = num % 3;
        if (y==0){
            x = x - 1
            y = y + 2
        } else {
            y = y - 1
        }
        return [x, y];
    };
    const getBoard = function(){
        return board;
    };
    const getNum = function(coords){
        let x = coords[0] + 1;
        let y = coords[1] + 1;
        console.log(coords);
        return ((x-1)*3 + (y-1)) + 1;
    };
    const setBoard = function(x, y, p){
        board[x][y] = p;
    };
    const fillBoard = function(num, p){
        console.log("Filling board: ", num, p);
        let coords = getBoardPosition(num);
        console.log("Filling board: ", coords);
        setBoard(coords[0], coords[1], p);
    };
    return { findBestMove, fillBoard, getBoard, getNum, resetboard};
})();

let choose_x_box = document.querySelectorAll(".choose-box-img");
let image_container = document.querySelector(".grid-container");
let images = image_container.children;

for (let i = 0; i < choose_x_box.length; i++){
    choose_x_box[i].onclick = function(event){
        for (let j = 0; j < choose_x_box.length; j++){
            if (choose_x_box[j].classList.contains("selected")){
                choose_x_box[j].classList.remove("selected");
            }
        }
        let classlist = event.target.classList;
        classlist.add("selected");
        img_x = event.target;
        let src = img_x.src;
        console.log(src);
        for (let j = 0; j < images.length; j++){
            images[j].children[0].src = src;
            console.log(images[j].children[0].src);
        }
    }
}

const displayFunctions = function(){
    const gameOver = function(player){
        let bottom = document.querySelector(".bottom");
        bottom.classList.add("hidden");
        let gameover_screen = document.querySelector(".gameover-alert");
        gameover_screen.classList.remove("hidden");
        console.log(gameover_screen.classList);
        console.log(player.getType());
            
        let grid = document.querySelector(".grid-container");
        grid.classList.add("hidden");
        let body = document.querySelector("body");
        
        if (player.getType() == "X"){
            console.log("PERSON WINS!");
            body.classList.remove("p2");
            body.classList.add("p1");
            gameover_screen.classList.remove("hidden");
            gameover_screen.children[0].innerHTML = "YOU WIN!";
        }
        else if (player.getType() == "O"){
            console.log("COMPUTER WINS!");
            body.classList.remove("p1");
            body.classList.add("p2");
            gameover_screen.classList.remove("hidden");
            gameover_screen.children[0].innerHTML = "COMPUTER WINS!";
        }
    };
    const tieGame = function(){
        let bottom = document.querySelector(".bottom");
        bottom.classList.add("hidden");
        let grid = document.querySelector(".grid-container");
        let body = document.querySelector("body");
        let gameover_screen = document.querySelector(".gameover-alert");

        grid.classList.add("hidden");
        body.classList.add("tiegame");
        gameover_screen.children[0].innerHTML = "TIE GAME!";
    };
    return {gameOver, tieGame};
}


console.log("hello world");

let board = document.querySelector(".grid-container");

const map1 = new Map();
map1.set(1, [1,1]);
map1.set(2, [1,2]);
map1.set(3, [1,3]);
map1.set(4, [2,1]);
map1.set(5, [2,2]);
map1.set(6, [2,3]);
map1.set(7, [3,1]);
map1.set(8, [3,2]);
map1.set(9, [3,3]);

const player = function(sign){
    let type = sign;
    let myPositions = new Set();
    const getType = function(){
        return type;
    };
    const addPosition = function(position){
        myPositions.add(position);
    };
    const getPositions = function(){
        return myPositions;
    }
    const resetPositions = function(){
        myPositions = new Set();
    }
    return {getType, addPosition, getPositions, resetPositions}
}

/* module for display */


const gameBoard = (function(){
    const fill_spots = function(arr){
        for (let i = 1; i <= 3; i++){
            for (let j = 1; j <= 3; j++){
                arr.push((i-1)*3 + j);
            }
        }
        return arr;
    }
    
    let all_spots = fill_spots(new Array());
    const numRemainingSpots = function(){
        return all_spots.length;
    }
    const newgame = function(player1, player2){        
        minimax_functions.resetboard();
        let body = document.querySelector("body");
        body.classList.remove("p1");
        body.classList.remove("p2");
        let bottom = document.querySelector(".bottom");
        bottom.classList.remove("hidden");
        let alert = document.querySelector(".gameover-alert");
        alert.classList.add("hidden");
        all_spots = fill_spots(new Array());
        player1.resetPositions();
        player2.resetPositions();
        
        // let gameover_screen = document.querySelector(".gameover");
        // gameover_screen.classList.add("hidden");
        
        let board = document.querySelector('.grid-container');
        board.classList.remove("hidden");
        for (let i = 0; i < board.children.length; i++){
            for (let j = 0; j < board.children[i].children.length; j++){
                board.children[i].children[j].classList.remove("active");
                board.children[i].children[j].classList.add("hidden");
            }
        }
    }
    // const getRandomIndex = function(){
    //     const randomNum = (Math.floor(Math.random() * all_spots.length));
    //     return randomNum;
    // }
    const winChecker = () => {
        const checkHoriz = function(player){
            let pos = player.getPositions();
            let f = 1
            let s = 4;
            let t = 7;
            let row1 = 0;
            let row2 = 0;
            let row3 = 0;
            for (let i = 0; i < 3; i++){
                if (pos.has(f)){
                    row1++;
                } if (pos.has(s)){
                    row2++;
                } if (pos.has(t)){
                    row3++;
                }
                f++;
                s++;
                t++;
            }
            if ((row1==3) || (row2==3) || (row3==3)){
                return true;
            }
            return false
        };
        const checkVert = function(player){
            let pos = player.getPositions();
            let f = 1
            let s = 2;
            let t = 3;
            let col1 = 0;
            let col2 = 0;
            let col3 = 0;
            for (let i = 0; i < 3; i++){
                if (pos.has(f)){
                    col1++;
                } if (pos.has(s)){
    
                    col2++;
                } if (pos.has(t)){
                    col3++;
                }
                f+=3;
                s+=3;
                t+=3;
            }
            if ((col1==3) || (col2==3) || (col3==3)){
                return true;
            }
            return false
        }
        const checkDiag = function(player){
            let pos = player.getPositions();
            if (pos.has(1) && pos.has(5) && pos.has(9)){
                return true;
            }else if (pos.has(3) && pos.has(5) && pos.has(7)){
                return true;
            }
            return false;
        }
        const checkAll = function(player){
            return checkHoriz(player) || checkVert(player) || checkDiag(player);
        }
        return {checkAll}
    };
    let winner = -1;
    const setWinner = (player) => {
        if (player.getType() == "X"){
            winner = 0;
        }else if (player.getType()=="O"){
            winner = 1;
        }
    }
    const getWinner = () =>{
        return winner;
    }
    const playGame = function(p1, p2){
        console.log(all_spots);
        const player2click = function(num){
            if (numRemainingSpots() == 0){
                console.log("tie game");

                displayFunctions().tieGame();
                return;
            }
            console.log("player 2");
            

            let c = minimax_functions.findBestMove(minimax_functions.getBoard());
            let grid_pos = minimax_functions.getNum(c);
            console.log(grid_pos);
            minimax_functions.fillBoard(grid_pos, 'o');
            

            //random number from all_spots (remaining)
            //let n = all_spots[randomIndex];
            console.log('all_spots', all_spots);
            let randomIndex = all_spots.indexOf(grid_pos);

            all_spots.splice(randomIndex, 1);

            console.log("player2: cell number: ", c, " cell number index: ", randomIndex);
            console.log(all_spots);
            console.log("\n");
            console.log(c);
            document.getElementById(grid_pos).children[1].classList.remove("hidden");
            document.getElementById(grid_pos).children[1].classList.add("active")
            p2.addPosition(grid_pos);
            board.classList.remove("pointer-delay");
            if (winChecker().checkAll(p2)){
                setWinner(p2);
                displayFunctions().gameOver(p2);
                return
            }
        }
        //all_spots = list with 9 initial nums 1-9
        board = document.querySelector('.grid-container');
        board.onclick = function(event){
            //cells num that user clicks on (1-9)
            if (!event.target.classList.contains("active")){
                
                let cell_num = parseInt(event.target.id);

                minimax_functions.fillBoard(cell_num, 'x');
                console.log(all_spots);
                //index of cell number in all_spots array
                let cell_num_index = all_spots.indexOf(cell_num);
                console.log(cell_num_index);
                console.log("all_spots after p1 move", all_spots)
                //remove that num from all_spots
                all_spots.splice(cell_num_index, 1);

                console.log("player 1: cell number: ", cell_num, "cell index in all_spots: ", cell_num_index);
                console.log(all_spots);
                console.log("\n");
                
                document.getElementById(cell_num).children[0].classList.remove("hidden");
                document.getElementById(cell_num).children[0].classList.add("active");
                p1.addPosition(cell_num);
                if (winChecker().checkAll(p1)){
                    displayFunctions().gameOver(p1);
                    setWinner(p1);
                    return
                }
                console.log("winner: ", getWinner(), numRemainingSpots());
                board.classList.add("pointer-delay")
                setTimeout(player2click, 1000);
                if (getWinner() != 0){
                    return;
                }
                if (numRemainingSpots() == 0){
                    displayFunctions().tieGame();
                    return;
                }
            }
        }
    };
    return {all_spots, playGame, newgame};
})();

const p1 = player("X");
const p2 = player("O");

gameBoard.playGame(p1, p2);

let button = document.getElementById("reset");
button.onclick = function(){
    gameBoard.newgame(p1, p2);
}


/*
ADDITIONS:
- keep track of number of times won/lost in a given session
    - keep leaderboard -- wins/losses/times for each game
    - button for reset leaderboard/session
- decorate the home page better
    - allow user to choose which image to use for X and O
- allow mode where computer goes first instead of user
- toggle for AI mode:
    - minimax AI algorithm to get best possible outcomes
*/


