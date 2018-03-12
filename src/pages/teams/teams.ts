import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamDetailPage } from '../team-detail/team-detail';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  tournament: any;

  teams = [
    {id: 1, name: 'Palmeiras', description: "Salve Verdão!", inTournaments: ['Campeonato Brasileiro', 'Campeonato Paulista'], visible: false},
    {id: 2, name: 'Santos', description: "Bosta", inTournaments: ['Campeonato Brasileiro', 'Campeonato Paulista'], visible: false},
    {id: 3, name: 'Grêmio', description: "Bosta", inTournaments: ['Campeonato Brasileiro', 'Campeonato Gaúcho'], visible: false},
    {id: 4, name: 'Internacional', description: "Bosta", inTournaments: ['Campeonato Brasileiro', 'Campeonato Gaúcho'], visible: false},
    {id: 5, name: 'Chelsea', description: "Bosta", inTournaments: ['Premier League'], visible: false},
    {id: 6, name: 'Manchester City', description: "Salve Gabriel Jesus!", inTournaments: ['Premier League'], visible: false},
    {id: 7, name: 'Barcelona', description: "Bosta", inTournaments: ['La Liga'], visible: false},
    {id: 8, name: 'Real Madrid', description: "Bosta", inTournaments: ['La Liga'], visible: false},
    {id: 9, name: 'Bayern Munich', description: "Bosta", inTournaments: ['Bundesliga'], visible: false},
    {id: 10, name: 'Borussia Dortmund', description: "Salve Reus!", inTournaments: ['Bundesliga'], visible: false}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tournament = navParams.data;
    this.populateTournament();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  teamTapped($event, team) {
    this.navCtrl.push(TeamDetailPage, team);
  }

  populateTournament() {
    this.teams.forEach(team => {
      team.inTournaments.forEach(tournament => {
        if(tournament == this.tournament.name) {
          team.visible = true;
        }
      });
    });
  }
}
