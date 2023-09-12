import { Soldier } from './Soldier';
import {SoldierFactory} from "./SoldierFactory";

const factory = new SoldierFactory();

const soldier1 = new Soldier('infantry', factory);
const soldier2 = new Soldier('infantry', factory);
const soldier3 = new Soldier('artillery', factory);

soldier1.displayInfo();
soldier2.displayInfo();
soldier3.displayInfo();
