/**
 * @Complexity O(1)
 * @description Creates a Node Interface for the queue
 * @param value The value of the node
 * @param next The next node in the queue or undefined if the node is the tail
 */
type Node<T> = {
    value: T,
    next?: Node<T>,
}


export default class Queue<T> {
    // The number of items in the queue
    public length: number;

    // The first item in the queue (the oldest)
    private head?: Node<T>;

    // The last item in the queue (the newest)
    private tail?: Node<T>;
    
    // Creates a new queue object
    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    /**
     * @Complexity O(1)
     * @description Adds an item to the end of the queue
     * @param item The item to add to the queue
     */
    enqueue(item: T): void {
        const node = { value: item } as Node<T>;

        // base case, if the queue is empty
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return
        }

        // If the queue is not empty, then add the node to the end
        this.tail.next = node;
        this.tail = node;
    }

    /**
     * @Complexity O(1)
     * @description Removes the first item in the queue
     * @returns The first item in the queue 
     * @returns undefined if the queue is empty
     */
    deque(): T | undefined {
        // If the queue is empty, return undefined
        if (!this.head) {
            return undefined;
        }

        // Decrement the length
        this.length--;

        // If there is only one item, then head and tail are the same
        const head = this.head;
        this.head = this.head.next;

        // Free memory
        head.next = undefined;

        // If the queue is empty, then set the tail to undefined
        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }

    /**
     * @Complexity O(1)
     * @description Identifies if the queue is empty
     * @returns The first item in the queue
     * @returns undefined if the queue is empty
     */
    peek(): T | undefined {
        return this.head?.value;
    }
}