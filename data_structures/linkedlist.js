class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val){
        let newVal = new Node(val);
        if(!this.head){
            this.head = newVal;
            this.tail = this.head;
        }
        else{
            this.tail.next = newVal;
            this.tail = newVal;
        }
        this.length += 1;
        return this;
    }
    
    pop(){
        //if there are no nodes in the list return undefined
        if(!this.length) return 'undefined'
        //loop through the list until you reach the tail
        const current = this.head;
        const newTail = current;

        while(current.next){
            newTail = current;
            curent = current.next;
        }
        //set the next property of the 2nd to last node to be null
        this.tail = newTail;
        this.tail.next = null;
        //decrement length
        this.length -= 1
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        //return node removed
        return current;
    }

    shift(){
        //if there are no nodes return undefined
        if(!this.length) return 'undefined';
        //store the current head in a variable
        const temp = this.head;
        //set the head property to be current head's next property
        this.head = temp.next;
        //decrement the length by 1
        this.length -= 1;
        if(this.length === 0){
            this.tail = null;
        }
        //return value of node removed
        return temp;
    }

    unshift(val){
        //accept value
        //create new node
        const newNode = new Node(val);
        //if theres no head we set head and tail to the new node
        if(!this.head){
            this.head = newVal;
            this.tail = this.head;
        }
        //otherwise set the newly created node's next property to be the current head property on the list
        else{
            const prevHead = this.head;
            //set the head property on the list to be that newly created node
            this.head = newNode;
            this.head.next = prevHead;
        }
        //increase length
        this.length += 1;
        //return list
        return this;
    }

    get(index){
       //accept an index
       //validate index
       if(index > this.length || index < 0) return 'undefined'
       //loop through the list until you reach the index and return the node at that specific index
       var current = this.head;
       var count = 0;
       while(count !== index){
           current = current.next;
           count += 1;
       } 
       return current
    }
    set(index,value){
        //use get method to find the node
        //if node is not found return false
        const node = this.get(index);
        if(node){
            node.value = value;
            return true;
        }
        //if node is found set the value of that node to be the value passed
        return false;
    }

    insert(index,value){
        //if the index is less than zero or greater than the length return false
        if(index > this.length || index < 0) return false;
        //if the index is the same as the length push a new node to the end of the list
        if(index === this.length){
           return !!this.push(value);
        }
        //if the index is 0 unshift a new node to the start of the list
        else if(index === 0){
            return !!this.unshift(value);
        } else{
            //otherwise using the get method access the node at the previous position of the given index
                //set the next property on that node to be the new node
                //set the next property on the new node to be the previous next
                //increment the length
            const newNode = new Node(value);
            const prevNode = this.get(index - 1);
            const currentNext = prevNode.next;
            prevNode.next = newNode;
            newNode.next = currentNext;    
        }
        this.length += 1;
        return true;
    }

    remove(index){
        //if the index is less than zero or greater than the length return undefined
        if(index < 0 || index > this.length) return 'undefined';
        if(index === 0) return this.shift();
        //if the index is the same as the length -1 pop
        if(index === this.length - 1) return this.pop();
        //otherwise use get method acces the previous node
        const prevNode = this.get(index - 1); 
        //set the next property on that node to be the next of the next node
        const currentNext = prevNode.next;
        prevNode.next = currentNext.next;
        //decrement the length
        this.length -= 1
        //return the value of node removed
        return currentNext;
    }

    reverse(){
        if(!this.head) return undefined;
        //create variable to hold the head
        let node = this.head;
        //swap the head and tail
        this.head = this.tail;
        //create variable next
        let next;
        //create variable prev
        let prev = null;
        //loop through the list
        for(let i = 0; i < this.length; i++){
            //set next to be the next property on whatever node is
            //set the next property on the node to be whatever prev is
            next = node.next;
            node.next = prev;
            //Set prev to be the value of the node variable
            prev = node;
            //set the node variable to be the value of the next variable
            node = next
        }
    }
}