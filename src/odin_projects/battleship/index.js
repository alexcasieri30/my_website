/*


# BATTLESHIP

components of game: 
    - when the user opens the screen, they are asked to give their name
    - 2 sides of screen:
        - left side = player side
        - right side = computer side
    - first: right side has player's ships
    - player clicks on the ships, and "carries" them to the board
        - board then has shadow of the ship size
        - onclick -> ship is dropped
    - when player places all ships, computer screen is released

    - computer --> random ships on the board
    - computer --> chooses random spots on my board on setTimeout() after player click
        - once comp chooses a random spot, the spot cannot be chosen again
            - coordinate removed from set
    - once all coordinates with ships placed are removed:
        - whoever did it, wins the game


- factories:
    - ship
        - has its location coordinates
        - "hit" coordinates
        - isUncovered() --> checks if a ship is completely uncovered
        - uncover() --> change color, change this.uncovered = true
        - hitCoordinate(id)
            update this.hit_coordinates


    - game-board
        - get available spots
        - set spot
        - ships
        - numShipsLeft
        - update board
            iterate through gameboard.ships:
                if e.target in gameboard.ships[i].coordinates:
                    gameboard.ships[i].hitCoordinate(e.target)

                    if (gameboard.ships[i].isUncovered()){
                        gameboard.ships[i].uncover()
                    }
        - update ships:
            iterate through this.ships:
                if ! ship.uncover(){
                    numShipsLeft+=1
                }
                
        - isDoneYet --> checks if numShipsLeft == 5
    
    - player + computer
        - coordinates (location/length) of all ships
        - current spots chosen
        - board
        - isWinner=false
        - get next spot --> board.getAvailableSpots()
        - board.onclick = function(e){
            add e to player's spots
            change color of e.target
            this.gameboard.updateBoard(e.target)
            updateCurrentSpotsChosen()
            if (player.isDoneYet()){
                isWinner = true
            }
        }

    - game
        - player1
        - gameStats() --> keep track of players
        - playGame(player)
            while !game.player.didWin() && !game.computer.didWin(){
                game.player.chooseSpot()
                if game.player.isWinner(){
                    show player winner screen
                    break
                }
                setTimeout(game.computer.chooseSpot(),1000)
                if game.computer.isWinner(){
                    show computer winner screen
                    break
                }
            }

- main:
    - start screen
        - ask user for name
    - place ships screen
        - right -> ship types
        - left -> board
    - game boards

*/

