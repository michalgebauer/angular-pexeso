import { Component } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
    selector: 'enter-user',
    template: `
        <h2 md-dialog-title>Congratulation !!!</h2>
        <md-dialog-content>
            <md-input-container>
                <input #user mdInput placeholder="Username">
            </md-input-container>
        </md-dialog-content>
        <md-dialog-actions>
            <!-- Can optionally provide a result for the closing dialog. -->
            <button md-button [md-dialog-close]="user.value">Save Score</button>
        </md-dialog-actions>
    `
})
export class EnterUserComponent {
    constructor(public dialogRef: MdDialogRef<EnterUserComponent>) {}
}