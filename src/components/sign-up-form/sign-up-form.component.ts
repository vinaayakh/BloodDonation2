import { Component } from '@angular/core';
import { Person } from '../../models/person';

@Component({
    selector: 'sign-up-form-component',
    templateUrl: 'sign-up-form.component.html'
})
export class SignUpFormComponent {
    showSignUp: boolean = true; // default false to show the sign up buttons first.
    personDetails: Person = new Person();
    bloodTypeList: Array<String> = ['O+ve', 'O-ve', 'A+ve', 'A-ve', 'B+ve', 'B-ve', 'AB+ve', 'AB-ve']

    constructor() { 
        console.log(this.personDetails);
    }

    openProfileForm() {
        this.showSignUp = false;
    }
    
    registerDonor(profileForm){
        console.log(profileForm);
    }
    
    cancelRegister(){
        this.showSignUp = true;
    }
}
