
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  timeValues:string[]=[];
  constructor (private fb: FormBuilder, private _snackBar: MatSnackBar){ }
  
  register=this.fb.group({
    Title:['', Validators.required]
  })

  get getTitleStatus(){
    return this.register.get("Title")
  }




  
  // timeValue():any{
  //   for (let hour = 0; hour <= 23; hour++) {
  //     for (let minute = 0; minute < 60; minute += 15) {
  //       const hourString = hour.toString().padStart(2, '0');
  //       const minuteString = minute.toString().padStart(2, '0');
  //       const timeString = `${hourString}:${minuteString}`;
  //       this.timeValues.push(timeString);
  //     }
  // }

  //   check(){
//     const time1 = '11:59';
// const time2 = '12:00';

// const date1 = new Date(`2000-01-01T${time1}:00`);
// const date2 = new Date(`2000-01-01T${time2}:00`);

// if (date1.getTime() > date2.getTime()) {
//   console.log(`${time1} is later than ${time2}`);
// } else if (date1.getTime() < date2.getTime()) {
//   console.log(`${time1} is earlier than ${time2}`);
// } else {
//   console.log(`${time1} is the same as ${time2}`);
// }
//   }
  }

