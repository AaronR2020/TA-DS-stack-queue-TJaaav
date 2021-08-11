class Queue {
    constructor(capacity = Infinity) {
      this.capacity = capacity;
      this.store = [];
    }
    get length() {
      return this.store.length;
    }
    enqueue(newValue) {
      if (this.store.length >= this.capacity) {
        alert(`Stack is overflowing`);
        return;
      }
      this.store.unshift(newValue);
      return this.store.length;
    }
    dequeue() {
      return this.store.pop();
    }
    peek() {
      return this.store[this.length - 1];
    }
    printAll() {
      this.store.forEach((elm) => {
        console.log(elm);
      });
    }
    isEmpty() {
      return this.store.length === 0;
    }
  }