import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import { ScoreService } from './score.service';
import { MdDialog } from '@angular/material';
import { EnterUserComponent } from './enter-user.component';

@Component({
    selector: 'pexeso-pane',
    template: `
        <div class='pexeso-pane'>
            <pexeso-card 
                *ngFor='let card of cards' 
                [value]='card.value'
                [turned]='card.turned'
                (click)='turn(card)'>
            </pexeso-card>
        </div>
    `,
    styles: [`
        div.game-finished {
            clear: both;
        }
    `]
})
export class PexesoPaneComponent implements OnInit {

    constructor(
        private scoreService: ScoreService,
        private router: Router,
        public dialog: MdDialog) {}

    cards: PexesoCard[];
    attempts: number;

    ngOnInit(): void {
        let cardsSource: PexesoCard[] = [
            {value: 'zajic', turned: false},
            {value: 'zajic', turned: false},
            {value: 'krtek', turned: false},
            {value: 'krtek', turned: false},
            {value: 'jezek', turned: false},
            {value: 'jezek', turned: false}];

        this.cards = _.shuffle(cardsSource);
        this.attempts = 0;
    }

    turn(card: PexesoCard) {
        card.turned = !card.turned;
        this.attempts++;

        if(!this.cards.filter(card => !card.turned).length) {
            let dialogRef = this.dialog.open(EnterUserComponent);

            dialogRef.afterClosed().subscribe(result => {
                console.log(`Dialog result: ${result}`);
                if(result) {
                    this.scoreService.saveUser(result.trim());
                }

                this.cards.forEach(card => card.turned = false);
                this.router.navigate(['/scoreboard']);
            });

        }
    }
}

export class PexesoCard {
    value: string;
    turned: boolean;
}