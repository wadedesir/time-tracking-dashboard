import { Component, Input, OnInit } from '@angular/core';
import { TimeScale, TimeData, TimeFrames, PastDate } from 'src/app/models/types';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() timeData?: TimeData;
  @Input() timeScale: TimeScale = 'weekly';
  
  title: string = '';
  current: number = 0
  previous: number = 0
  last: PastDate = {
    daily: 'Yesterday - ',
    weekly: 'Last Week - ',
    monthly: 'Last Month - '
  }
  pastString: string = ''

  constructor(private commonService: CommonService){
    commonService.updateCards.asObservable().subscribe((time: TimeScale) => {
      this.processData(this.timeData?.timeframes!, time)
    })
  }

  ngOnInit(): void {
    this.processData(this.timeData?.timeframes!, this.timeScale)
  }

  processData(data: TimeFrames, time: TimeScale){
    time = time ? time : this.timeScale
    this.title = this.timeData!.title.toLowerCase()
    this.current = data[time].current
    this.previous = data[time].previous
    this.pastString = this.last[time]
  }

}
