import { Injectable } from "@angular/core";
import PouchDB from 'pouchdb';
import { Person } from "../models/person";
import { ToastService } from "./toast.service";

@Injectable()
export class DatabaseService {
    db;
    remote: any;
    constructor(private toast: ToastService) {
        this.initDatabase();
    }

    initDatabase() {
        this.db = new PouchDB('Donors');
        this.remote = new PouchDB("https://couchdb-9f925b.smileupps.com/donors");
        this.db.sync(this.remote, { "continuous": true, "live": true }).on('change', function (change) {
            // yo, something changed!
            console.log(change);
            //get new docs here and change the service to emit an observable for the docs list
        });
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
        this.remote.post(donor).then((success) => {
        }).catch((err) => {
            console.log(err);
        });;
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
}