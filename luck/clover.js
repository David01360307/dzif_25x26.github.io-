        let spaces = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
        let player = 'O';
        let computer = 'X';
        let running = true;
        let times_movebutton = 0;
        let current_position_left = 0;
        let current_position_right = 0;

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
                    alert("贏ㄌ") 
                    running = false;
                } else if (checkTie()) {
                    alert("平手!") 
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
                    alert("輸了QQ") 
                    running = false;
                } else if (checkTie()) {
                    alert("平手") 
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



        function movebutton(){ 
            var me = document.getElementById("test") 
            
            if (times_movebutton <= 3){
                 current_position_left = Math.random() * (50 + 50) - 50; 
                 current_position_right = Math.random() * (50 + 50) - 50; 
                 me.style.left = current_position_left + "px"; 
                 me.style.top = current_position_right + "px"; } 
            else if (times_movebutton == 4){
                 alert("夠了歐，我不想聽!") } 
            else if (times_movebutton == 5){ 
                alert("好啦，有想說的你就說嘛") } 
            else{ 
                var textbox_content = document.getElementById("textarea"); 
                var box = textbox_content.value; alert("已收到您的"); 
                alert(box); alert("意見"); } 
                
            times_movebutton += 1; }


