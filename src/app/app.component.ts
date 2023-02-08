import { Component } from '@angular/core';
import {TimeScale} from './models/types' //type that can only be specific time values
import * as data from './mockData/data.json' //grab data from json file, had to set "resolveJsonModule" to true in tsconfig

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  times: TimeScale[] = ['daily', 'weekly', 'monthly']
  currentTimeScale: TimeScale = 'weekly' //set default time scale selection
  data = Array.from(data) //grab data frorm json file and convert to array

  changeTimeScale(time: TimeScale){
    this.currentTimeScale = time //update time variable for sidebar links
  }

}
