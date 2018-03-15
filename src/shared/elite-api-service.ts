import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EliteApi {
    private baseUrl = 'https://elite-schedule-app-1411a.firebaseio.com/';
    constructor(private http: Http) {

    }

    getTournaments() {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments.json`).subscribe(data => {
                resolve(data.json())
            });
        });
    }

    getTeams(tournamentId: string) {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments-data/${tournamentId}/teams.json`).subscribe(data => {
                resolve(data.json())
            });
        });
    }
}