import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-upcoming-driver',
  templateUrl: 'upcoming-driver.html'
})
export class UpcomingDriver {

	driver_trips: any;

	constructor(public navCtrl: NavController, public params: NavParams) 
	{
		this.run();
	}

	run(){
		this.driver_trips = this.params.data;
	}

	ionViewDidLoad() 
	{

	}

}