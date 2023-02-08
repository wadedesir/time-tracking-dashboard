import { Component, Input, OnInit } from '@angular/core';
import { TimeScale, TimeData, TimeFrames } from 'src/app/models/types';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() timeData?: TimeData;
  @Input() childTest: any = [];
  @Input() timeScale?: TimeScale;
  
  title: string = '';
  iconStyle: string = ''
  current: number = 0
  previous: number = 0

  constructor(private commonService: CommonService){
    commonService.updateCards.asObservable().subscribe((time: TimeScale) => {
      this.title = this.timeData!.title
      this.title = this.title.toLowerCase()
      this.current = this.timeData!.timeframes[time].current
      this.previous = this.timeData!.timeframes[time].previous
    })
  }

  ngOnInit(): void {
    this.processData(this.timeData?.timeframes!)
    console.log(this.timeData)
  }

  processData(data: TimeFrames){
    this.title = this.timeData!.title
    this.title = this.title.toLowerCase()
    this.current = data[this.timeScale!].current
    this.previous = data[this.timeScale!].previous
  }

}
