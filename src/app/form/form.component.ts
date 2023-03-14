
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';
import { CustomValidator } from '../customvalidator';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  minDate=formatDate(new Date(),"yyyy-MM-dd","en-in");
  
  constructor (private fb: FormBuilder, private _snackBar: MatSnackBar){ }
  
  register=this.fb.group({
    Title:['', [Validators.required]],
    DateInitial:['', [Validators.required]],
    DateFinal: ['', [Validators.required]],
    time1:['', [Validators.required]],
    time2:['', [Validators.required]]
  }, {validators:[CustomValidator.dateValidator, CustomValidator.timeValidator]})

  
  get getTitleStatus(){
    return this.register.get("Title")
  }
  
  get getfirstDate(){
    
    return this.register.get("DateInitial")
  }
  get getEndDate(){
    
    return this.register.get("DateFinal")
  }
  get getStartTime(){
    return this.register.get("time1")
  }
  get getEndTime(){
    return this.register.get("time2")
  }

  timeValues:string[]=[];
  selectedTimeValue: string|any;
  selectedTimeValue2: string|any
  ngOnInit():any {
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 60; j += 15) {
        let hr;
        if (i < 10) {
          hr = '0' + i;
        } else {
          hr = i.toString();
        }
        let min;
        if (j === 0) {
          min = '00';
        } else {
          min = j.toString();
        }
        let time = hr + ':' + min;
        this.timeValues.push(time);
      }
    }
    
  }
  }

