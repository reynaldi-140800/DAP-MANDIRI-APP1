export class Employee{
    private _fullName!:string;
    private _address!:string;


//Getter and Setter
get fullName() {return this._fullName}
set fullName(name:string){this._fullName=name}

get address() {return this._address}
set address(address:string){this._address=address}

toString():string{
    return 'Employee name: '+ this._fullName + 'address: ' + this._address;
}
}