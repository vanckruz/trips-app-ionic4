import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { UserInfoPage } from '../user-info/user-info';
import { AcceptTermsPage } from '../accept-terms/accept-terms';

@Component({
  selector: 'page-detail-trip',
  templateUrl: 'detail-trip.html'
})
export class DetailTrip {

	trip: any;
	show: boolean;

	constructor(
		public navCtrl: NavController,
		public params: NavParams,
		public storage: Storage,
		public modalCtrl: ModalController
	){
		this.trip = this.params.get("trip");
		this.showBlockedItems();
	}

	ionViewDidLoad(){
		console.log('Hello DetailTrip Page');
	}

	showBlockedItems(){
		this.storage.get('user').then((user) => {
		  this.show = (user) ? true : false;
		});      
	}

	letRide(trip){
	    this
		.modalCtrl
		.create(AcceptTermsPage,{trip: trip})
	    .present();		
		//console.log(trip);
	}

	goUserInfo(user){
		this.navCtrl.push(UserInfoPage, {
			user: user
		});
	}
}
