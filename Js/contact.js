class AddressBookContact {

    //Getters & Setters
    get fullName() {
        return this._fullName;
    }
    set fullName(fullName) {
        let fullNamePattern = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (fullNamePattern.test(fullName)) {
            this._fullName = fullName;
        }
        else
            throw 'Invalid FullName !';
    }
    get address() {
        return this._address;
    }
    set address(address) {
        let words = address.split(" ");
        let addressPattern = RegExp('([A-Z a-z 0-9]{3,})+');
        for (const word of words) {
            if (!addressPattern.test(word))
                throw 'Invalid Address !';
        }
        this._address = address;
    }
    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
    get zipcode() {
        return this._zipcode;
    }
    set zipcode(zipcode) {
        let zipPattern = RegExp('^[1-9][0-9]{6}$');
        if(zipPattern.test(zip)){
            this._zip = zip;  
        }
        else
            throw 'Invalid ZipCode!';

    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phPattern = RegExp('^[0-9]{2}[1-9][0-9]{9}$');
        if (phPattern.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else
            throw 'Invalid Phone Number!';
    }

    //Methods
    toString() {
        return '[ FullName : ' + this.fullName + ' Address : '
            + this.address + ' City : ' + this.city + ' State : ' + this.state + ' Zip : ' + this.zip +
            ' Phone Number : ' + this.phoneNumber + ' ]';
    }
}