/**
 * 
 * Time Complexity - sqrt(N)
 * Given two crystal balls that will break if dropped from high enough distance, 
 * determine the exact spot in which it will break in the most 
 * optimized way.
 */
export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
;
    let i = jumpAmount

    /**
     * jump forward by the square root of N
     * until we find a break
     */
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        } 
    }

    /**
     * walk back by the square root of N
     */
    i -= jumpAmount;


    /**
     * Linearly walk forward until you find a break
     * Only need to walk at most the square root of N
     */
    for (let j = 0 ; j < jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i
        }
    }

    return -1 
}