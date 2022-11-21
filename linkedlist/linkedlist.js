// User defined class node
class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
// linkedlist class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }

    prepend(value){
        console.log(value);
        const node = new Node(value)
        console.log(node);
        if(this.isEmpty()){
            this.head = node
            console.log('empty');
            console.log(this.head);
        }
        else{
            node.next=this.head
            this.head = node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let curr = this.head
            console.log(curr);
            let listValues = ''
            while(curr){
                listValues += `${curr.value}`
                curr = curr.next
                console.log(curr);
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList()
console.log('List is empty',list.isEmpty());
console.log('Size',list.getSize());
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.print()