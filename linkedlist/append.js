class Node {

    constructor(element){
        this.element=element
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }
        else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }
        else{
            this.head.next = node
            this.tail= node


        }
    }
}
const list = new LinkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
console.log(list);

