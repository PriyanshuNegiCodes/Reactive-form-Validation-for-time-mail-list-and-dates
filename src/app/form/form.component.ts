import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';
import { CustomValidator } from '../customvalidator';
import { formatDate } from '@angular/common';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
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
  guestList: string[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
      guestEmail = new FormControl('', [Validators.email]);

      addGuest(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add guest only when MatAutocomplete is not active
        if ((input && !input.value) || (value && value.trim() === '')) {
          return;
        }

        // validate email
        const regex = /\S+@\S+\.\S+/;
        if (!regex.test(value)) {
          this.guestEmail.setErrors({ 'emailFormat': true });
          return;
        }

        // add guest to the list
        if (this.guestEmail.valid) {
          this.guestList.push(value.trim());
        }

        // clear the input value
        if (input) {
          input.value = '';
        }

        this.guestEmail.setValue(null);
      }
  
      removeGuest(email: string): void {
        const index = this.guestList.indexOf(email);
 
        if (index >= 0) {
          this.guestList.splice(index, 1);
        }
      }
  
  }

