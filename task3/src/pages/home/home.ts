import { Component } from '@angular/core';
import {Platform} from 'ionic-angular';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  fontSize: string;

  constructor(public navCtrl: NavController, platform: Platform) {
    platform.ready().then((readySource) => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
      this.fontSize = platform.width()/100 + 'rem';
    });
  }

}
