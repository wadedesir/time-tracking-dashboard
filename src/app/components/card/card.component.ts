import { Component, Input, OnInit } from '@angular/core';
import { TimeScale, TimeData, TimeFrames, PastDate } from 'src/app/models/types';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() timeData?: TimeData; //card data for this specific card
  @Input() timeScale: TimeScale = 'weekly'; //initiate default time scale
  
  title: string = '';
  current: number = 0 //stores current hours for this time frame
  previous: number = 0 //sets past hours
  last: PastDate = { //makes it easier to specify text for previous dates
    daily: 'Yesterday - ',
    weekly: 'Last Week - ',
    monthly: 'Last Month - '
  }
  pastString: string = ''

  constructor(private commonService: CommonService){
    commonService.updateCards.asObservable().subscribe((time: TimeScale) => {
      this.processData(this.timeData?.timeframes!, time) //process data function updates the card data each time a change is detected
    })
  }

  ngOnInit(): void {
    this.processData(this.timeData?.timeframes!, this.timeScale)
  }

  processData(data: TimeFrames, time: TimeScale){
    this.title = this.timeData!.title.toLowerCase() //sets lowercase title as they are used for class names
    this.current = data[time].current //update current and past time values
    this.previous = data[time].previous
    this.pastString = this.last[time] //set previous date text
  }

}
