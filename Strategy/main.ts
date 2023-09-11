import { SortingContext } from "./SortingContext";

const data = [5, 2, 9, 3, 6, 1];
const context = new SortingContext(new BubbleSort());

console.log("Data sorted with Bubble Sort:", context.sortData(data));

context.setStrategy(new MergeSort());
console.log("Data sorted with Merge Sort:", context.sortData(data));
