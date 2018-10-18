import { Injectable, ViewChild } from "@angular/core";
import PouchDB from 'pouchdb';
import { Person } from "../models/person";
import { PopupService } from "./popup.servicec";
import { Subject } from "rxjs";

@Injectable()
export class DatabaseService {
    db;
    remote: any;
    donorList: Array<Person> = [];
    donorList$: Subject<Person[]> = new Subject();

    constructor(
        private alert: PopupService,
    ){
        this.initDatabase();
    }

    async initDatabase() {
        this.db = new PouchDB('Donors');
        this.remote = new PouchDB("https://couchdb-9f925b.smileupps.com/donors");
        this.db.sync(this.remote, { live: true,
            retry: true,
            continuous: true })
        .on('change', (err) => {
            console.log("complete")
            this.getMany();
        })
        .on('complete', ()=> {
            this.getMany();
        }).on('error', (err) => {
            console.log("complete")
            this.getMany();
        });
    }

    async getMany() {
        console.log("get all docs");
        let docs = await this.db.allDocs({ include_docs: true });
        this.donorList = docs.rows.map(person => person.doc) as Array<Person>;
        this.updateDonorList();
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
        return new Promise ( (resolve, reject)=>{
            this.remote.post(donor).then((success) => {
                this.alert.showAlert('Registration Completed', 'You have been successfully registered', 'Your details have been added to the database and are accessible to all users of this application')
                resolve(success);
            }).catch((err) => {
                console.log(err);
                reject(err);
            });;
        });
    }

    updateData(donor: Person) {
        this.remote.put(donor).catch((err) => {
            console.log(err);
        });
    }

    deleteData(donor: Person) {
        this.remote.remove(donor).catch((err) => {
            console.log(err);
        });
    }

    updateDonorList() {
        console.log(this.donorList);
        this.donorList$.next(this.donorList);
    }
}