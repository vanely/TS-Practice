export interface IBoard {
    scores: ILeader;
    addPlayerScore(player: string, score: number): void;
    averageScore(player: string): void;
    show(): ILeader;
    removePlayer(player: string): void;
}

export interface ILeader {
    [plyr: string]: number[][];
}
