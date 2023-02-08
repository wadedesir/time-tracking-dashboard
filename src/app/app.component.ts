import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import {TimeScale} from './models/types'
import * as data from './mockData/data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  times: TimeScale[] = ['daily', 'weekly', 'monthly']
  currentTimeScale: TimeScale = 'weekly'
  data = Array.from(data)

  changeTimeScale(time: TimeScale){
    this.currentTimeScale = time
  }

}
