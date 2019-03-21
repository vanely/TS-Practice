import {ILeader} from './interfaces';
import {IBoard} from'./interfaces';

export default class LeaderBoard implements IBoard {
  public scores: ILeader;

  constructor() {
    this.scores = {};
  }

  //push new score to second array within first player array. If player doesn't exist yet assign the first score, then call average function.
  addPlayerScore(player: string, score: number) {
    if(this.scores.hasOwnProperty(player)) {
      this.scores.player.push([score]);
    }
    else {
      this.scores.player = [[score]];
    }

    this.averageScore(player);
  }

  //calculates average.
  averageScore(player: string) {
    let avgSum :number = 0;

    this.scores.player[0].forEach((score: number) => {
      avgSum += score;
    });
    
    this.scores.player.push([avgSum / this.scores.player[0].length]);
  }

  //outputs leader board object
  show() {
    return this.scores;
  }

  //remove player from leaderboard object.
  removePlayer(player: string) {
    delete this.scores.player;
  }
}