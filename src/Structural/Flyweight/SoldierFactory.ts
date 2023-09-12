import {SoldierData} from "./SoldierData";

/**
 * Class FlyweightFactory that create and manage the SoldierData flyweight objects
 */
export class SoldierFactory {
    private soldierDataMap: { [key: string]: SoldierData } = {};

    getSoldierData(type: string): SoldierData {
        if (!this.soldierDataMap[type]) {
            this.soldierDataMap[type] = new SoldierData(`Soldier ${type}`, type, `image_${type}.png`);
        }
        return this.soldierDataMap[type];
    }
}
