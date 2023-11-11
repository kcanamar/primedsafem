function qs(arr: number[], lo: number, hi: number): void {
    /**
     * base case
     */
    if (lo >= hi) {
        return;
    }

    /**
     * pivot index after weak sorting
     */
    const pivotIdx = partition(arr, lo, hi);

    /**
     * sort the elements before the pivot index
     */
    qs(arr, lo, pivotIdx - 1);

    /**
     * sort the elements after the pivot index
     */
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {

    /**
     * set pivot as the last element in the array
     */
    const pivot = arr[hi];

    let idx = lo - 1;

    /**
     * iterate through the elements in the array between the indices lo and hi
     */
    for (let i = lo; i < hi; i++) {
        /**
         * checks if the element is less than the pivot value
         */
        if(arr[i] < pivot) {
            /**
             * increments the index
             * swaps the elements at the indices i and idx
             */
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    } 

    /**
     * Increment the index
     * swaps the pivot value with the element at the index idx
     */
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    /**
     * returns the index of the pivot
     */
    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}