let spaces = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
        let player = 'O';
        let computer = 'X';
        let running = true;

        function drawBoard() {
            let board = document.getElementById('board');
            board.querySelectorAll('.cell').forEach((cell, index) => {
                cell.textContent = spaces[index];
            });
        }

        function playerMove(number) {
            if (spaces[number] === ' ' && running) {
                spaces[number] = player;
                drawBoard();
                if (checkWin(player, computer)) {
                    document.getElementById('result').textContent = '贏了>_<!';
                    running = false;
                } else if (checkTie()) {
                    document.getElementById('result').textContent = '平手!';
                    running = false;
                } else {
                    computerMove();
                }
            }
        }

        function computerMove() {
            if (running) {
                let number;
                let temp = ai(spaces, player);
                if (temp !== -1) {
                    number = temp;
                    document.getElementById('result').textContent = '想得美';
                } else {
                    do {
                        number = Math.floor(Math.random() * 9);
                    } while (spaces[number] !== ' ');
                }
                spaces[number] = computer;
                drawBoard();
                if (checkWin(player, computer)) {
                    document.getElementById('result').textContent = '輸了QQ';
                    running = false;
                } else if (checkTie()) {
                    document.getElementById('result').textContent = '平手!';
                    running = false;
                }
            }
        }

        function checkWin(player, computer) {
            const lines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
            for (let line of lines) {
                if (spaces[line[0]] !== ' ' && spaces[line[0]] === spaces[line[1]] && spaces[line[1]] === spaces[line[2]]) {
                    return true;
                }
            }
            return false;
        }

        function checkTie() {
            for (let space of spaces) {
                if (space === ' ') {
                    return false;
                }
            }
            return true;
        }

        function ai(spaces, player) {
            const lines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
            for (let line of lines) {
                let countPlayer = 0;
                let countEmpty = 0;
                let emptyIndex = -1;
                for (let i of line) {
                    if (spaces[i] === player) {
                        countPlayer++;
                    } else if (spaces[i] === ' ') {
                        countEmpty++;
                        emptyIndex = i;
                    }
                }
                if (countPlayer === 2 && countEmpty === 1) {
                    return emptyIndex;
                }
            }
            return -1;
        }

        
        function clearBoard() {
            for (let index = 0; index < 9; index++) {
                spaces[index] = ' ';
            }
        }
        
        function resetGame() {
            clearBoard();
            drawBoard();
            running = true;
        }

        drawBoard();


