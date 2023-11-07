/**
 * @description Node interface for the stack
 */
type Node<T> = {
    value: T,
    prev?: Node<T>,
}
/**
 * @constructor Creates a new stack object
 * @param {number} length Public The number of items in the stack
 * @param {Node} head Private The first item on top of stack (the newest)
 */
export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    /**
     * @description Adds an item to the top of stack
     * @param item The item to add to top of stack
     */
    push(item: T): void {
        const node = { value: item } as Node<T>;

        // increment the length of the stack
        this.length++;
        
        // base case, if the stack is empty
        if (!this.head) {
            this.head = node;
            return;
        }

        // If the stack is not empty, then add the node to the end
        node.prev = this.head;
        this.head = node;
    }

    /**
     * @description Removes the first item on top of the stack
     * @returns The first item on top of the stack
     */
    pop(): T | undefined {
        // stay at zero if the stack is empty or reduce by 1
        this.length = Math.max(0, this.length - 1);

        // base case, if the stack is empty
        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        // If the stack is not empty, then remove the node from the end
        const head = this.head as Node<T>;
        this.head = head.prev;

        // Free up the memory
        head.prev = undefined;

        return head.value;
    }

    /**
     * @description Identifies if the stack is empty
     * @returns The first item in the stack
     * @returns undefined if the stack is empty
     */
    peek(): T | undefined {        
        return this.head?.value;
    }
}