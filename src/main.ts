import {IBoard} from './interfaces';
import LeaderBoard from './leaderboard';
//ts leader board
//create player
//record player score
//avg player's scores
//output avg player score and highest score

let board: IBoard = new LeaderBoard();
board.addPlayerScore("Luna", 480);
board.addPlayerScore("Luna", 20);
board.addPlayerScore("Luna", 100);

console.log(board.show());