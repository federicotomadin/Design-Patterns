
// Class Soldier that use the SoldierFactory to get the SoldierData flyweight objects
import {SoldierFactory} from "./SoldierFactory";


/**
 * Class Flyweight that create and manage the SoldierData flyweight objects
 */
export class Soldier {
    constructor(private soldierType: string, private factory: SoldierFactory) {}

    displayInfo() {
        const soldierData = this.factory.getSoldierData(this.soldierType);
        console.log(`Name: ${soldierData.name}, Type: ${soldierData.type}, Image: ${soldierData.profileImage}`);
    }
}
