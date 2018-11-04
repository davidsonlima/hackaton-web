import { UserType } from "./enumeration/user-type";
import { Serializable } from "./serializable";

export class User {
    email : number;
    name : string;
    cnpj : string;
    userType : UserType;

    isOngUser() : boolean {
        return this.userType === UserType.ONG;
    }

    isRestaurantUser(): boolean {
        return this.userType === UserType.RESTAURANT;
    }

    fillFromJSON(json : any) {
        this.email = json.email;
        this.name = json.name;
        this.cnpj = json.cnpj;
        this.userType = json.userType;
    }
}