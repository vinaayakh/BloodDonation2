import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../models/person'
@Component({
    selector: 'card-component',
    templateUrl: 'card.component.html'
})
export class CardComponent {
    @Input('person') person: Person;
    @Output('clicked') clicked: EventEmitter<any> = new EventEmitter();

    constructor() { }

    openCard(){
        this.person['openCard'] = !this.person['openCard'];
        if(this.person['openCard']){
            this.clicked.emit(this.person);
        }
    }

    callPerson(){
        console.log(this.person);
    }

}
