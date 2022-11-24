import { retry } from "rxjs"

export class Employee {
    private _fullname!: string
    private _address!: string


    // Getter and Setter
    // get -> getter
    // set -> setter

    get fullName(){return this._fullname}
    set fullName(name: string) {this._address =  name}

    get address(){return this._address}
    set address(alamat: string) {this._address =  alamat}


    toString(): string {
        return 'Employee name:' + this._fullname + 'and address: ' + this._address
    }
}