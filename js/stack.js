class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    // if (!this.top) {
    // this.top = new Node(value, null);
    // } else {
    this.top = new Node(value, this.top);
    // }
  }
  pop() {
    if (!this.top) {
      return null;
    }
    const { data } = this.top;
    this.top = this.top.next;
    return data;
  }
  peek() {
    return this.top?.data;
  }
  empty() {
    return !this.top;
  }
  [Symbol.iterator]() {
    let current = this.top;
    return {
      next: () => {
        if (!current) {
          return {
            value: undefined,
            done: true,
          };
        }
        const { data } = current;
        current = !current.top ? current.next : null;
        return {
          value: data,
          done: false,
        };
      },
    };
  }
}

const stack = new Stack();
console.log('stack.peek :>> ', stack.peek());
stack.push(55);
stack.push(true);
console.log('stack.empty() :>> ', stack.empty());
console.log('stack.peek :>> ', stack.peek());
console.log('stack.pop() :>> ', stack.pop());
console.log('stack :>> ', stack);
console.log('stack.pop() :>> ', stack.pop());
console.log('stack :>> ', stack);
console.log('stack.pop() :>> ', stack.pop());
console.log('stack.pop() :>> ', stack.pop());
console.log('stack.empty() :>> ', stack.empty());
for (const item of stack) {
  console.log('item :>> ', item);
}
stack.push(1);
stack.push(3);
stack.push(5);
stack.push(7);
stack.push(9);

for (const item of stack) {
  console.log('item :>> ', item);
}
console.log('stack.peek() :>> ', stack.peek());
console.log('stack.pop() :>> ', stack.pop());
for (const item of stack) {
  console.log('item :>> ', item);
}
