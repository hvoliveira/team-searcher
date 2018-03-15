import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamDetailPage } from '../team-detail/team-detail';
import { EliteApi } from '../../shared/elite-api-service';

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

  teams: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public eliteApi: EliteApi, public loadingController: LoadingController) {
    this.tournament = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');

    let loader = this.loadingController.create({content: "Getting data..."});
    loader.present().then(() => {
      this.eliteApi.getTeams(this.tournament.id).then(data => {
        this.teams = data;
        console.log("Loaded: ", data);
        loader.dismiss();
      });  
    });
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
