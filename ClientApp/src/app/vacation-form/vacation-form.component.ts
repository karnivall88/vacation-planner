import { Component, OnInit,ViewChild, Output } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { EventEmitter } from 'events';
import { FormBuilder,FormGroup,Validators, FormControlName, FormControl } from '@angular/forms';



export interface VacationType
  {
    value:string;
    viewValue:string;
  }
  // export interface VacationForm
  // {
  //   empId:string,
  //   department:string,
  //   firstName:string,
  //   LastName:string,
  //   position:string,
  //   manager:string,
  //   vacType:string,
  //   vacStart:string,
  //   vacEnd:string,
  //   penultimate:boolean,
  //   payDay:string,
  //   print:boolean

  // }


@Component({
  selector: 'app-vacation-form',
  templateUrl: './vacation-form.component.html',
  styleUrls: ['./vacation-form.component.css']
 
})
export class VacationFormComponent implements OnInit {
  
  vacationForm:FormGroup;
  // vacation:VacationForm;

  
  
  disabled= true;

  vacations: VacationType[] = [
    {value: 'a-holiday', viewValue: 'Annual holiday'},
    {value: 's-leave', viewValue: 'Study leave'},
    {value: 'h-wo-pay', viewValue: 'Holiday without pay'},
    {value: 'c-leave', viewValue: 'Child leave'},
    {value: 'p-leave', viewValue: 'Paternity leave'},
    {value: 'se-leave', viewValue: 'Seniority leave'},
  ];

 

  constructor(private svc:CalendarService) { 
    
    this.vacationForm = new FormGroup({
      empId:      new FormControl({value: '23576183', disabled: true},Validators.required),
      department: new FormControl({value: 'BNEP GSU EE Manufacturing Eng', disabled: true},Validators.required),
      firstName:  new FormControl({value: 'Albert', disabled: true},Validators.required),
      lastName:   new FormControl({value: 'Apsit', disabled: true},Validators.required),
      position:   new FormControl({value: 'Engineer', disabled: true},Validators.required),
      manager:    new FormControl({value: 'Elivra Žagarene', disabled: true},Validators.required),
      vType:      new FormControl('',Validators.required),
      vStart:     new FormControl('',Validators.required),
      vEnd:       new FormControl('',Validators.required),
      penultimate:new FormControl('penultimate',Validators.required),
      payDay:     new FormControl({value: '', disabled: true},Validators.required),
      print:      new FormControl('')

    }, )
  }

  ngOnInit() {

    
  }
  
  ngAfterViewInit()
  {
   

  }
  
  add()
  {
    if(this.vacationForm.valid){
      console.log(this.vacationForm.getRawValue());
      
    let formDate =  new Date(this.vacationForm.controls.vEnd.value);
    formDate.setDate(formDate.getDate()+1);
    formDate.toISOString();
    let endDate = formDate.toISOString();
    
    let startDate =  new Date(this.vacationForm.controls.vStart.value).toISOString();
    let title = this.vacationForm.controls.firstName.value +" "+ this.vacationForm.controls.lastName.value 
    this.svc.setData(title,startDate,endDate)
    
    // console.log(this.vacationForm);
    this.vacationForm.controls.vType.reset();
    this.vacationForm.controls.vStart.reset();
    this.vacationForm.controls.vEnd.reset();
    this.vacationForm.controls.payDay.reset();
    this.vacationForm.controls.payDay.disable();
    this.vacationForm.controls.penultimate.setValue('penultimate');
    console.log(this.svc.getData());
  }
  }
 
  

}
