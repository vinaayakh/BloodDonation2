import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Person } from '../../models/person';
import { DatabaseService } from '../../services/database.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personList= [];
  donorList$: Subject<Person[]>;
  donorListSubscription: Subscription;

  constructor(public navCtrl: NavController, private database : DatabaseService, private changeDetection : ChangeDetectorRef) {
  }
  
  ngOnInit(){
    this.donorList$ = this.database.donorList$;
    this. donorListSubscription = this.donorList$.subscribe((change)=>{
      this.personList = change;
      this.changeDetection.detectChanges();
    });
    this.database.getMany();
  }

  ngOnDestroy() {
    this.changeDetection.detach();

    this.donorListSubscription.unsubscribe();
  }

  cardClicked(clickedPerson) {
    this.personList.map(person => { 
      person['openCard'] = person.name == clickedPerson.name; 
      return person;
    });
  }
  
}
