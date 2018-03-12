import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  tournaments = [
    {id: 0, name: 'Campeonato Brasileiro'},
    {id: 1, name: 'Campeonato Paulista'},
    {id: 2, name: 'Campeonato Gaúcho'},
    {id: 3, name: 'Premier League'},
    {id: 4, name: 'La Liga'},
    {id: 5, name: 'Bundesliga'}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
  }

  manuallyGoBack() {
    this.navCtrl.pop();
  }

  itemTapped($event, tournament) {
    this.navCtrl.push(TeamsPage, tournament);
  }


}
