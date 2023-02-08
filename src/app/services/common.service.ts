import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TimeScale } from '../models/types';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  updateCards = new Subject<TimeScale>() //will allow updates to cards based on changes to time scale 
}
