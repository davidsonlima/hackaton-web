export class Serializable {
    fillFromJSON(jsonObj: any) {
        for (var propName in jsonObj) {
            this[propName] = jsonObj[propName]
        }
    }
    toJSON() : string {
        return JSON.stringify(this);
    }
}