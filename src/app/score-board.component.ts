import { Component, OnInit } from '@angular/core';
import { ScoreService } from './score.service';

@Component({
    selector: 'score-board',
    template: `
        <md-list *ngIf="players && players.length">
            <md-list-item  *ngFor="let player of players">{{player}}</md-list-item>
        </md-list>
    `
})
export class ScoreBoardComponent implements OnInit {

    players: string[];

    constructor(private scoreService: ScoreService) {}

    ngOnInit(): void {
        this.scoreService.getTopPlayers().then(players => this.players = players);
    }

}