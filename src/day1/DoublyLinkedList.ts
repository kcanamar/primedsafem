type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>,
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    /**
     * @description inserts an item at the beginning of the list
     * @param item the item to prepend to the list
     * @returns 
     */
    prepend(item: T): void {
        const node = {value: item} as Node<T>;

        /**
         * increment the length of the list
         * If there is no head, set the head and tail to the new node
         */
        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        /**
         * set the next property of the new node to the current head
         * set the previous property of the current head to the new node
         * set the head property to the new node
         */
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    /**
     * @description inserts an item at the specified index of the list
     * @param {T} item the item to insert into the list
     * @param {number} idx index to insert the item at
     * @returns 
     */
    insertAt(item: T, idx: number): void {

        /**
         * check if the index is out of range
         */
        if (idx < 0 || idx > this.length) {
            throw new Error(`Index out of range: ${idx}`);
        }
        
        /**
         * If the index is the length of the list, append the item to the list
         * If the index is 0, prepend the item to the list
        */
       if (idx === this.length){
           this.append(item);
           return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }
        
        /**
         * increment the length of the list
        */
        this.length++;
        
        /**
         * Typecast the current node as a Node<T>
         * avoids having to check if the node is undefined before accessing the next/prev property
        */
        const curr = this.getAt(idx) as Node<T>;
        const node = {value: item} as Node<T>;

        /**
         * set the next property of the new node to the current node
         * set the previous property of the current node to the new node
         * set the current node's previous property to the new node
         */
        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        /**
         * if the previous node exists, set the next property of the previous node to the new node
         */
        if ( node.prev ) {
            node.prev.next = node;
        }
    }

    append(item: T): void {

        /**
         * increment the length of the list
         * create a new node
         */
        this.length++;
        const node = {value: item} as Node<T>;

        /**
         * if there is no tail, set the head and tail to the new node
         */
        if (!this.tail) {
            this.head = this.tail = node;
            return; 
        }

        /**
         * set the previous property of the new node to the current tail
         * set the next property of the current tail to the new node
         * set the tail property to the new node
         */
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {

        let curr = this.head;

        /**
         * loop through the list until the item is found or the end of the list is reached
         */
        for (let i = 0; curr && i < this.length; ++i) {
            if (curr.value === item) {
                break;
            }
            curr = curr.next;
        }

        if(!curr) {
            return undefined;
        }

        return this.removeNode(curr);
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);

        if ( !node ) {
            return undefined;
        }

        return this.removeNode(node);
    }

    /**
     * @description removes a node from the list
     * @param {T} node the node to remove
     * @returns {T} 
     */
    private removeNode(node: Node<T>): T | undefined {
        this.length--;
        if ( this.length === 0 ) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if ( node.prev ) {
            node.prev.next = node.next;
        }

        if ( node.next ) {
            node.next.prev = node.prev;
        }

        if ( node === this.head ) {
            this.head = node.next;
        }

        if ( node === this.tail ) {
            this.tail = node.prev;
        }

        node.prev = node.next = undefined;
        return node.value;
    }

    /**
     * @description gets the node at the specified index
     * @param {number} idx index to get the node at
     * @returns {Node<T>}
     */
    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }

        return curr;
    }

}