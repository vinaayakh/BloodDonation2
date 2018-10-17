import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CardComponent } from '../components/card/card.component';

import { Toast } from '@ionic-native/toast';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { ProfilePage } from '../pages/profile/profile.component';
import { SignUpFormComponent } from '../components/sign-up-form/sign-up-form.component';
import { DatabaseService } from '../services/database.service';
import { SafePipe } from '../pipes/safe-pipe';
import { ToastService } from '../services/toast.service';
import { CallNumber } from '@ionic-native/call-number';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CardComponent,
    ProfilePage,
    SignUpFormComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseService,
    Camera,
    Toast,
    ToastService,
    CallNumber
  ]
})
export class AppModule {}
