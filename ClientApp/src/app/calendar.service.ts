import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';



interface MyEvent
{
  start?: string,
  end?: string,
  title?:string,
  backgroundColor?:string,
  approval?: boolean,
  borderColor?:string
}

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  dummyEvent:MyEvent = {start:'2019-07-01', end:'2019-07-14', title:'Albert', approval:true}

  data = [this.dummyEvent];

  constructor() { }

  getData():Observable<any[]> {
    
  return of(this.data);

  }
  setData(title:string,startDate:string,endDate:string){    
    this.data.push({start:startDate,
         end:endDate,
         title:title,
         backgroundColor: "tomato",
         approval:false,
         borderColor: "wheat"})

  }

  
}
