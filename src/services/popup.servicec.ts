import { Injectable } from "@angular/core";
import { AlertController } from 'ionic-angular';

@Injectable()
export class PopupService {
    constructor(private alert: AlertController) {
    }

    showAlert(title, subtitle, msg, handler?, enableBackdropDismiss = false) {
        let alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            message: msg,
            buttons: [
                {
                    text: "OK",
                    handler: (enableBackdropDismiss == false) ? handler : null
                }
            ],
            enableBackdropDismiss: enableBackdropDismiss
        });
        if(enableBackdropDismiss){
            alert.onDidDismiss(handler);
        }
        alert.present();
    }
}