export class User {
    public email : number;
    public name : string;
    public ongName : string;
    public restaurantName : string;
    public cnpj : string;
    
    public isOngUser() : boolean {
        return !!this.ongName;
    }

    public isRestaurantUser(): boolean {
        return !!this.restaurantName;
    }
}