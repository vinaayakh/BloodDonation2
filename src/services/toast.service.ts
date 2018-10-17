import { Injectable } from "@angular/core";
import { Toast } from '@ionic-native/toast';

@Injectable()
export class ToastService {
    constructor(private toast: Toast) {
    }

    showToast(message){
        console.log(message);
        this.toast.show(message, '4000', 'bottom').subscribe(
            toast => {
              console.log(toast);
            }
          );
    }
}