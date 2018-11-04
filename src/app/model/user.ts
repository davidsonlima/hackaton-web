import { UserType } from "./enumeration/user-type";

export class User {
    email : number;
    name : string;
    cnpj : string;
    userType : string;

    isOngUser() : boolean {
        return this.userType === UserType.ONG_USER;
    }

    isRestaurantUser(): boolean {
        return this.userType === UserType.RESTAURANT_USER;
    }

    fillFromJSON(json : any) {
        this.email = json.email;
        this.name = json.name;
        this.cnpj = json.cnpj;
        this.userType = json.userType;
    }
}