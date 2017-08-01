import { Component, Input } from '@angular/core';

@Component({
    selector: 'pexeso-card',
    template: `
        <div class="pexeso-card">
            <img [src]="getUrl()" />
        </div>
    `,
    styles: [`
        .pexeso-card {
            float: left;
            width: 200px;
            height: 200px;
            margin: 10px;
            cursor: pointer;
            border: solid 1px #d8d7d7;
        }

        .pexeso-card img {
            width: 100%;
            height: 100%;
        }
    `]
})
export class PexesoCardComponent {
    @Input() value: string;
    @Input() turned: boolean;

    getUrl(): string {
        let url = this.turned ? this.value : 'back';
        return `/assets/${url}.png`;
    }
}