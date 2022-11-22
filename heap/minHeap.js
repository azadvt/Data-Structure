class MinHeap {
  constructor() {
    this.node = [null];
  }

  insert(node) {
    /* inserting new node at the end of the node array */

    this.node.push(node);

    /* finding the correct position for new node */
    if (this.node.length > 1) {
      let current = this.node.length - 1;

      /* Traversing up  the parent node until the current node is greater than the parent (current/2) */

      while (
        current > 1 &&
        this.node[Math.floor(current / 2)] > this.node[current]
      ) {
        /* Swapping the two nodes by using the ES6 destructuring syntax*/

        [this.node[Math.floor(current / 2)], this.node[current]] = [
          this.node[current],
          this.node[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }

  print() {
    console.log(this.node);
  }

  remove() {
    /* Smallest element is at the index 1 in the node array */

    let smallest = this.node[1];

    /* When there are more than two elements in the array, we put the right most element at the first position
        and start comparing nodes with the child nodes
      */

    if (this.node.length > 2) {
      this.node[1] = this.node[this.node.length - 1];
      this.node.splice(this.node.length - 1);

      if (this.node.length === 3) {
        if (this.node[1] > this.node[2]) {
          [this.node[1], this.node[2]] = [this.node[2], this.node[1]];
        }
        return smallest;
      }
    }

    let current = 1;
    let leftChildIndex = current * 2;
    let rightChildIndex = current * 2 + 1;

    while (
      this.node[leftChildIndex] &&
      this.node[rightChildIndex] &&
      (this.node[current] > this.node[leftChildIndex] ||
        this.node[current] > this.node[rightChildIndex])
    ) {
      if (this.node[leftChildIndex] < this.node[rightChildIndex]) {
        [this.node[current], this.node[leftChildIndex]] = [
          this.node[leftChildIndex],
          this.node[current],
        ];
        current = leftChildIndex;
      } else {
        [this.node[current], this.node[rightChildIndex]] = [
          this.node[rightChildIndex],
          this.node[current],
        ];
        current = rightChildIndex;
      }

      leftChildIndex = current * 2;
      rightChildIndex = current * 2 + 1;
    }

    if (
      this.node[rightChildIndex] === undefined &&
      this.node[leftChildIndex] < this.node[current]
    ) {
      [this.node[current], this.node[leftChildIndex]] = [
        this.node[leftChildIndex],
        this.node[current],
      ];
    } else if (this.node.length === 2) {

    /* If there are only two elements in the array, we directly splice out the first element */
      this.node.splice(1, 1);
    } else {
      return null;
    }

    return smallest;
  }
}

const obj = new MinHeap();
obj.insert(80);
obj.insert(30);
obj.insert(50);
obj.insert(10);

obj.print();
obj.remove();
obj.print();
