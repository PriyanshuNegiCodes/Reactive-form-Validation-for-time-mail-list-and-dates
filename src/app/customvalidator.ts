import { formatDate } from "@angular/common";
import { FormControl } from "@angular/forms";

export class CustomValidator{

static dateCheck(date:FormControl){
    var today=formatDate(new Date(),"yyyy-MM-dd","en-in");

    if(date.value>today)
    {
       return null;
    }
    else{
       return {dateError:true};
    }
}

}