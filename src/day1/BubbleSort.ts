/**
 * Time Complexity : O(n^2)
 * 
 */
export default function bubble_sort(arr: number[]): void {
    const len = arr.length

    for (let i = 0; i < len; ++i) {

        /**
         * On the first iteration the last item will be sorted
         * Needs to walk up to and not include the last item,
         * each iteration we need to check if the next item is greater than the current one,
         * if it is, then swap them
         */
        for (let j = 0; j < len - 1 - i; ++j) {

            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}