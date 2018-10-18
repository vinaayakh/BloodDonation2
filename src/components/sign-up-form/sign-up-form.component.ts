import { Component } from '@angular/core';
import { Person } from '../../models/person';
import { DatabaseService } from '../../services/database.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from 'ionic-angular';
import { HomePage} from '../../pages/home/home';

@Component({
    selector: 'sign-up-form-component',
    templateUrl: 'sign-up-form.component.html'
})
export class SignUpFormComponent {
    showSignUp: boolean = true; // default true to show the sign up buttons first.
    personDetails: Person = new Person();
    bloodTypeList: Array<String> = ['O+ve', 'O-ve', 'A+ve', 'A-ve', 'B+ve', 'B-ve', 'AB+ve', 'AB-ve']

    constructor(
        private database: DatabaseService,
        private camera: Camera,
        private domSanitizer: DomSanitizer,
        private navCtrl : NavController
    ) {}

    openProfileForm() {
        this.showSignUp = false;
    }

    registerDonor(profileForm) {
        if (profileForm.valid) {
            this.database.saveData({ ...profileForm.value, profilePicture: this.personDetails.profilePicture }).then(()=>{
                this.navCtrl.push(HomePage);
            });
        }
    }

    cancelRegister() {
        this.showSignUp = true;
    }

    async openCamera() {
        const options: CameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }
        const imageData = await this.camera.getPicture(options);
        this.personDetails.profilePicture = `data:image/jpeg;base64,${imageData}`;
    }

    makeTrustedImage() {
        const imageString = JSON.stringify(this.personDetails.profilePicture);
        const style = 'url(' + imageString + ')';
        return this.domSanitizer.bypassSecurityTrustStyle(style);
    }
}
