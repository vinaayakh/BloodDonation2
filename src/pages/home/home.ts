import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Person } from '../../models/person';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personList: Array<Person> = [];

  constructor(public navCtrl: NavController) {
    this.personList = [
      {
        name: "Steve Rogers",
        bloodType: "O+ve",
        contactNumber: "517-279-9241",
        lastDonated: new Date(),
        address: {
          line1: "201 Amethyst Drive",
          line2: "",
          city: "Coldwater",
          state: "Michigan",
          pincode: "49036",
        },
        profilePicture: "../../assets/imgs/steve.jpg",
        openCard: false
      },
      {
        name: "Tony Stark",
        bloodType: "A+ve",
        contactNumber: "541-905-5352",
        lastDonated: new Date(),
        address: {
          line1: "1658 Biddie Lane",
          line2: "",
          city: "Richmond",
          state: "Virginia",
          pincode: "23219",
        },
        profilePicture: "../../assets/imgs/Tony_Stark.jpg",
        openCard: false
      },
      {
        name: "Natasha Romanoff",
        bloodType: "AB-ve",
        contactNumber: "718-937-4399",
        lastDonated: new Date(),
        address: {
          line1: "607 Skinner Hollow Road",
          line2: "",
          city: "Eugene",
          state: "Oregon",
          pincode: "97405",
        },
        profilePicture: "../../assets/imgs/black_widow.jpg",
        openCard: false
      },
      {
        name: "Bruce Banners",
        bloodType: "AB+ve",
        contactNumber: "631-373-9381",
        lastDonated: new Date(),
        address: {
          line1: "2048 Lady Bug Drive",
          line2: "",
          city: "Queens",
          state: "New York",
          pincode: "11101",
        },
        profilePicture: "../../assets/imgs/hulk.jpg",
        openCard: false
      },
      {
        name: "Peter Parker",
        bloodType: "O-ve",
        contactNumber: "979-341-8584",
        lastDonated: new Date(),
        address: {
          line1: "4402 Adams Drive",
          line2: "",
          city: "Houston",
          state: "Texas",
          pincode: "77002",
        },
        profilePicture: "../../assets/imgs/spider-man.jpg",
        openCard: false
      },
      {
        name: "Wanda Maximoff",
        bloodType: "B-ve",
        contactNumber: "561-605-8032",
        lastDonated: new Date(),
        address: {
          line1: "4449 Powder",
          line2: "House Road",
          city: "West Palm Beach",
          state: "Florida",
          pincode: "33411",
        },
        profilePicture: "../../assets/imgs/scarlet_witch.jpg",
        openCard: false
      },
    ]
  }


  cardClicked(clickedPerson) {
    this.personList.map(person => { 
      person['openCard'] = person.name == clickedPerson.name; 
      return person;
    });
  }
  
}
