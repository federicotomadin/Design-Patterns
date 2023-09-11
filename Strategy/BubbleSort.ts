//import { ISortingStrategy } from './ISortingStrategy';
interface ISortingStrategy {
    sort(data: number[]): number[];
}

class BubbleSort implements ISortingStrategy {
    sort(data: number[]): number[] {
        // Implementation of the bubble sort algorithm
        return data.slice().sort((a, b) => a - b);
    }
}

class MergeSort implements ISortingStrategy {
    sort(data: number[]): number[] {
        // Implementation of the Merge Sort algorithm
        return data.slice().sort((a, b) => a - b);
    }
}
