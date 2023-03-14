import { formatDate } from "@angular/common";
import { AbstractControl, FormControl } from "@angular/forms";

export class CustomValidator{

  static dateCheck(date:FormControl){
    var today=new Date()

   //  alert(today)
   //  alert("----------------")
   //  alert (date.value)
    if(date.value == today){
      
      return null;
    }
    else{
       return {dateError:true};
    }
  }
  

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
}
