export class Person {
    name: String;
    bloodType: String = 'O+ve';
    contactNumber: String;
    address: Address = new Address();
    lastDonated: Date;
    profilePicture: any;
    openCard: Boolean;

    constructor(
        name: string = null,
        bloodType: ('O+ve' | 'O-ve' | 'A+ve' | 'A-ve' | 'B+ve' | 'B-ve' | 'AB+ve' | 'AB-ve') = 'O+ve',
        contactNumber = null,
        address: Address = new Address(),
        lastDonated: Date = null,
        profilePicture = null,
        openCard = false
    ) { }
}

class Address {
    line1: String = null;
    // line2: String = null;
    city: String = null;
    state: String = null;
    pincode: String = null;

    constructor(
        line1 = null,
        // line2 = null,
        city = null,
        state = null,
        pincode = null
    ) { }
}