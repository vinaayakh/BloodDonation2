import { Injectable } from "@angular/core";
import PouchDB from 'pouchdb';
import { Person } from "../models/person";

@Injectable()
export class DatabaseService {
    db;
    remote: any;
    constructor() {
        this.initDatabase();
    }

    initDatabase() {
        this.db = new PouchDB('Donors');
        this.remote = new PouchDB("https://couchdb-9f925b.smileupps.com/donors");
        this.db.replicate.from(this.remote);
    }

    async getMany() {
        let docs = await this.db.allDocs({ include_docs: true });
        return docs.rows.map(person => person.doc) as Person[];
    }

    getOne() {
        return new Promise((resolve, reject) => {
            this.db.get({}).then((docs) => {
                console.log(docs);
                resolve(docs);
            });
        });
    }

    saveData(donor: Person) {
        this.remote.post(donor);
    }

    updateTodo(donor: Person) {
        this.remote.put(donor).catch((err) => {
            console.log(err);
        });
    }

    deleteTodo(donor: Person) {
        this.remote.remove(donor).catch((err) => {
            console.log(err);
        });
    }

    // initializeData(){
    //     this.saveData({
    //         name: "Wanda Maximoff",
    //         bloodType: "B-ve",
    //         contactNumber: "561-605-8032",
    //         lastDonated: new Date(),
    //         address: {
    //           line1: "4449 Powder",
    //           // line2: "House Road",
    //           city: "West Palm Beach",
    //           state: "Florida",
    //           pincode: "33411",
    //         },
    //         profilePicture: "../../assets/imgs/scarlet_witch.jpg",
    //         openCard: false
    //       })
    // }
}