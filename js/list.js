class Node {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  push_top(value) {
    if (!this.head && !this.tail) {
      this.head = this.tail = new Node(value, null, null);
    } else {
      this.head = new Node(value, null, this.head);
      this.head.next.prev = this.head;
    }
  }
  push_back(value) {
    if (!this.head && !this.tail) {
      this.head = this.tail = new Node(value, null, null);
    } else {
      this.tail = new Node(value, this.tail, null);
      this.tail.prev.next = this.tail;
    }
  }
  pop_top() {}
  pop_back() {}
  [Symbol.iterator]() {
    let current;
    let nextCurrent = this.head;
    return {
      next: () => {
        current = nextCurrent;
        if (!current) {
          return {
            value: undefined,
            done: true,
          };
        }
        nextCurrent = current.next;
        return {
          value: current.data,
          done: false,
        };
      },
    };
  }
}

const a = new List();
a.push_back(0);
a.push_top(1);
a.push_back(4);

a.push_top(2);
a.push_back(6);

a.push_top(3);
a.push_back(4);
a.push_back(5);
for (const node of a) {
  console.log(`node.data`, node);
}
