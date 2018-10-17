import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../models/person';
import { Toast } from '@ionic-native/toast';
import { CallNumber } from '@ionic-native/call-number';
@Component({
    selector: 'card-component',
    templateUrl: 'card.component.html'
})
export class CardComponent {
    @Input('person') person: Person;
    @Output('clicked') clicked: EventEmitter<any> = new EventEmitter();

    constructor(private toast: Toast, private callNumber: CallNumber) { }

    openCard() {
        this.person['openCard'] = !this.person['openCard'];
        this.toast.show('test', '4000', 'bottom').subscribe(
            toast => {
                console.log(toast);
            }
        );
        if (this.person['openCard']) {
            this.clicked.emit(this.person);
        }
    }

    callPerson(number) {
        console.log(number);
        this.callNumber.callNumber(number, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }

}
