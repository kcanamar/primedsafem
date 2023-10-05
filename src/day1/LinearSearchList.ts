export default function linear_search(haystack: number[], needle: number): boolean {

    // Big O notation 0(n)

    for ( let i = 0; i < haystack.length; i++ ) {
        if (haystack[i] === needle){
            return true
        }
    }

    return false
}