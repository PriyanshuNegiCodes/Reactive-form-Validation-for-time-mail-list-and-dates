import { formatDate } from "@angular/common";
import { AbstractControl, FormControl } from "@angular/forms";

export class CustomValidator{


  static dateValidator(ab:AbstractControl){

   if(ab.get('DateInitial')?.value<ab.get('DateFinal')?.value){
       return null;
   }else{
      return {dateCheck:true};
   }
  }
  static timeValidator(ab:AbstractControl){
   if(ab.get('time1')?.value<ab.get('time2')?.value){
      return null;

   }else{
      return {timeCheck:true};
   }
  }
  validateGuestEmails(control: AbstractControl): {[key: string]: any} | null {
   if (control.value !== '') {
     const emailString = control.value;
     const emails = emailString.split(',');
     const regex = /\S+@\S+.\S+/;
     for (let email of emails) {
     email = email.trim();
     if (!regex.test(email)) {
     return { 'invalidEmails': true };
     }
     }
     }
     return null;
     }
     
}


