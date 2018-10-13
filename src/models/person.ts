export class Person{
    name : String;
    bloodType: String;
    contactNumber: String;
    address: Address;
    lastDonated : Date;
    profilePicture: String;
    openCard:Boolean;

    constructor(name:string, bloodType:('O+ve'|'O-ve'|'A+ve'|'A-ve'|'B+ve'|'B-ve'|'AB+ve'|'AB-ve'), contactNumber, address=null, lastDonated, profilePicture=null, openCard=false){}
}

class Address{
    line1: String;
    line2: String;
    city:String;
    state:String;
    pincode:String;

    constructor(line1, line2=null, city, state, pincode){}
}