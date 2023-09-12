import { ISortingStrategy } from './ISortingStrategy';
export class SortingContext {
    constructor(private strategy: ISortingStrategy) {}

    setStrategy(strategy: ISortingStrategy) {
        this.strategy = strategy;
    }

    sortData(data: number[]): number[] {
        return this.strategy.sort(data);
    }
}
