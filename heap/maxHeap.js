class MaxHeap {
    constructor(){
        this.node = [null]
    }
    insert(node){
        this.node.push(node)

        if(this.node.length>1){

            let current = this.node.length -1

            while(current > 1 && this.node[Math.floor(current/2)] < this.node[current] ){
                [this.node[Math.floor(current/2)],this.node[current]] = [this.node[current],this.node[Math.floor(current/2)]]
                current = Math.floor(current/2)
            }
        }
    }

    print() {
        console.log(this.node);
      }
}


const obj = new MaxHeap();
obj.insert(5);
obj.insert(30);
obj.insert(50);
obj.insert(10);

obj.print();
