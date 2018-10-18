import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'ago'
})

export class DaysAgoPipe implements PipeTransform {
    constructor() {}
    transform(date) {
        let donatedDate = new Date(date).getTime();
        let today = Date.now();
        let diff = Math.round((today - donatedDate) / (1000*60*60*24));
        if(diff == 1){
            return `${Math.round(diff)} day ago`;
        }else{
            return `${Math.round(diff)} days ago`;
        }
    }
}