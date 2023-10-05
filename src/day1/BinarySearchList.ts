export default function bs_list(haystack: number[], needle: number): boolean {

    // BigO = 0(logN)
    // middle = floor( low + (high - low) / 2 )
    // value = arr[middle]
    // under the assumption that the array/list is sorted
    /*
    do {
        if value === needle  { return true }
        else if value > middle { low = middle + 1 }
        else { high = middle }

        ? low should be inclusive
        ! high should be exclusive
    } while (low < high)

    return false || -1 // a sentinel value
    */

    let low = 0; 
    let high = haystack.length;

    do {
        const middle = Math.floor(low + (high - low) / 2)
        const value = haystack[middle]

        if ( value === needle ) {
            return true;
        } else if ( value > needle ) {
            // reduce the high side to this point and exclude the current middle
            high = middle
        } else {
            // advance the low point to exclude the current middle
            low = middle + 1
        }

    } while ( low < high )

    return false
}