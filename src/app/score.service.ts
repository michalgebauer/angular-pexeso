import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ScoreService {

    constructor(private http: Http) {}

    // topPlayers = ["Miso", "Jano", "Fero"];

    getTopPlayers(): Promise<string[]> {
        return this.http.get("/rest/scoreboard")
            .toPromise()
            .then(response => response.json() as string[])
            .catch(this.handleError);
    }

    saveUser(username: string): void {
        this.http.post("/rest/scoreboard", JSON.stringify({name: username}), {headers: new Headers({'Content-Type': 'application/json'})})
            .toPromise()
            .then(res => res.json() as string);
    }

    private handleError(error: any): Promise<any> {
        console.error(error);
        return Promise.reject(error.message || error);
    }
}