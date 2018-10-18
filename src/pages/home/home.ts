import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Person } from '../../models/person';
import { DatabaseService } from '../../services/database.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personList= [];
  donorList$: Subject<any>;

  constructor(public navCtrl: NavController, private database : DatabaseService, private changeDetection : ChangeDetectorRef) {
  }
  
  ngOnInit(){
    this.donorList$ = this.database.donorList$;
    this.donorList$.subscribe((change)=>{
      this.personList = change;
      this.changeDetection.detectChanges();
    });
    this.database.getMany();
  }

  cardClicked(clickedPerson) {
    this.personList.map(person => { 
      person['openCard'] = person.name == clickedPerson.name; 
      return person;
    });
  }
  
}
