import { Component, OnInit,ViewChild, ViewEncapsulation } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarService } from '../calendar.service';
import   Tooltip from 'tooltip.js';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {
  @ViewChild('calendar',{static: false}) calendarComponent: FullCalendarComponent;

  calendarApi;

  tooltip:Tooltip;
  
  calendarEvents = [];

    calendarOptions = {
      editable:true,
      eventLimit:4,
      defaultView: 'dayGridMonth',
      firstDay: 1,
      weekNumbers: true,
      contentHeight: 850,
      aspectRatio: 2,
      navLinks:true,
      plugins: [dayGridPlugin, interactionPlugin],
      header: {
        center:'title',
        left:'mButton'
      },
      title:{
        month:'short',
        year:'numeric'
      },
      CustomButtons:{
        mButton:{
          text: "Month",
          click: function()
          {
            this.calendarApi.changeView('dayGridMonth')
          }
      }
    }
  }

  

  constructor( private svc:CalendarService) { 
    // this.svc.getData().subscribe( data =>{this.calendarEvents =  data} );
    
    // this.calendarEvents = data
  }
    

  


  ngOnInit() {
    
    this.svc.getData().subscribe( data =>{this.calendarEvents =  data} );
    // this.calendarApi = this.calendarComponent.getApi();
    // this.svc.getData().subscribe( data =>{this.calendarApi.addEventSource(data)});
    
  }

  ngAfterViewInit()
  {
    this.calendarApi = this.calendarComponent.getApi();
    // this.svc.getData().subscribe( data =>{this.calendarApi.addEventSource(data)});
  }
  
  
  handleDateClick (arg)
  {
    
    let view = this.calendarApi.view.type;

    console.log(view)

    if(view === 'dayGridMonth')
    {
    this.calendarApi.changeView('dayGridWeek');
    this.calendarOptions.eventLimit = 50;
    this.calendarApi.gotoDate(arg.dateStr);
    }
    else{
    this.calendarApi.changeView('dayGridMonth');
    this.calendarOptions.eventLimit = 4;
    this.calendarApi.gotoDate(arg.dateStr);
    }
  }
  onEventHover(arg)
  {
    console.log(arg);
    if(arg.event.extendedProps.approval == false)
    {  
    this.tooltip = new Tooltip(arg.el,{
      title: 'Vacation is waiting for approval of your manager',
      placement: 'top',
      trigger: 'hover',
      container: 'body'})
    }  
  }
  
}
