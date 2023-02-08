import { Component, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TimeScale } from 'src/app/models/types';
import { CommonService } from 'src/app/services/common.service'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
    @Input() timeScale?: TimeScale;
    @Input() parent?: AppComponent;
    times: TimeScale[] = ['daily', 'weekly', 'monthly']

    constructor(private commonService: CommonService){}

    changeTime(time: TimeScale){
      this.commonService.updateCards.next(time)
      this.parent?.changeTimeScale(time)
    }
}
