

// LINKED LISTS

// 1-->10 -->5-->16

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }  
  append(value){ // adding value after the head
     const newNode = {
       value: value,
       next: null
     }
     this.tail.next = newNode;
     this.tail = newNode;
     this.length++;
     return this;
  }
  prepend(value) { // adding value to the first of head
     const newNode = {
      value: value,
      next: null
     };
     newNode.next = this.head;
     this.head = newNode;
     this.length++;
     return this;
  }
  printList() { // Printing the Outup in an array 
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null ) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) { // inserts the element on a specified location with the index 
    if(index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null
    };
    const leader = this.traverseToIndex(index-1)  
    const holdingpointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingpointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index){ // helper function for insert function
    //check params
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5); // 10->5
myLinkedList.append(16); // 10->5->16
myLinkedList.prepend(1) // 1->10->5->16
myLinkedList.insert(3, 44); //  1->10->44->5->16

//printing in an array list
myLinkedList.printList()
console.log(myLinkedList)