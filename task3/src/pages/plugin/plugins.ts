import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-plugins',
  templateUrl: 'plugins.html'
})
export class PagePlugins {
  items: Array<{title: string, image: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [
      {'title': 'Google Calendar', 'image': 'assets/image/note_2.svg'},
      {'title': 'Weather', 'image': 'assets/image/weather.svg'},
      {'title': 'Morning Exercises', 'image': 'assets/image/Dumbbell.svg'},
      {'title': 'Google Calendar', 'image': 'assets/image/note_2.svg'},
      {'title': 'Weather', 'image': 'assets/image/weather.svg'},
      {'title': 'Morning Exercises', 'image': 'assets/image/Dumbbell.svg'},
      {'title': 'Google Calendar', 'image': 'assets/image/note_2.svg'},
      {'title': 'Weather', 'image': 'assets/image/weather.svg'},
      {'title': 'Morning Exercises', 'image': 'assets/image/Dumbbell.svg'},
      {'title': 'Google Calendar', 'image': 'assets/image/note_2.svg'},
      {'title': 'Weather', 'image': 'assets/image/weather.svg'},
      {'title': 'Morning Exercises', 'image': 'assets/image/Dumbbell.svg'},
    ]
  }

}
