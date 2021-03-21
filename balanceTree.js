class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Linklist {
    constructor(){
        this.head = new Node('head')
    }
    append(value){
        let node = new Node(value)
        node.next = this.head.next
        this.head.next = node
    }
    display(){
        let node = this.head
        while(node != null){
            console.log(node.value);
            node = node.next
        }
    }
    change(){
        let curr = this.head
        let prev = null
        let next = null
        while (curr != null) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
}

let l = new Linklist();
l.append(1)
l.append(2)
l.append(3)
l.append(4)
l.append(5)
l.append(6)