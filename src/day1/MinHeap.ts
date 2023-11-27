export default class MinHeap {
    public length: number;
    private data: number[];
    

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }
        
        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }
        
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const parent = this.parent(idx);
        const parentV = this.data[parent];
        const value = this.data[idx];

        if (parentV > value) {
            this.data[idx] = parentV;
            this.data[parent] = value;
            this.heapifyUp(parent);
        }

    }

    private heapifyDown(idx: number): void {
        const left = this.leftChild(idx);
        const right = this.rightChild(idx);

        if (idx >= this.length || left >= this.length) {
            return;
        }

        const leftV = this.data[left];
        const rightV = this.data[right];
        const value = this.data[idx];

        if (leftV > rightV && value > rightV) {
            this.data[idx] = rightV;
            this.data[right] = value;
            this.heapifyDown(right);
        } else if (rightV > leftV && value > leftV) {
            this.data[idx] = leftV;
            this.data[left] = value;
            this.heapifyDown(left);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}