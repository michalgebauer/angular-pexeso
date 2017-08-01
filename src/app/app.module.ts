import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { AppComponent } from './app.component';
import { PexesoCardComponent } from './pexeso-card.component';
import { PexesoPaneComponent } from './pexeso-pane.component';
import { ScoreBoardComponent } from './score-board.component';
import { EnterUserComponent } from './enter-user.component';

import {MdToolbarModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';

import { ScoreService } from './score.service';

@NgModule({
  declarations: [
    AppComponent,
    PexesoCardComponent,
    PexesoPaneComponent,
    ScoreBoardComponent,
    EnterUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'game', component: PexesoPaneComponent},
      { path: 'scoreboard', component: ScoreBoardComponent},
      { path: '', redirectTo: 'game', pathMatch: 'full'},
    ]),
    BrowserAnimationsModule,
    HttpModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdInputModule,
    MdButtonModule,
    MdDialogModule
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent],
  entryComponents: [EnterUserComponent]
})
export class AppModule { }
