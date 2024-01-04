import Node from "./Node.js";

/*
 Build the following functions in your linked list class:

append(value) adds a new node containing value to the end of the list
prepend(value) adds a new node containing value to the start of the list
size returns the total number of nodes in the list
head returns the first node in the list
tail returns the last node in the list
at(index) returns the node at the given index
pop removes the last element from the list
contains(value) returns true if the passed in value is in the list and otherwise returns false.
find(value) returns the index of the node containing value, or null if not found.
toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
Extra credit

insertAt(value, index) that inserts a new node with the provided value at the given index.
removeAt(index) that removes the node at the given index.
Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated. 
  
 */

const linkedList = () => {
    let listHead = null;
    let listSize = 0;

    const append = (node) => {
        let newNode = new Node(node);
        listSize++;
        if(listHead === null) {
            listHead = newNode;
            return;
        }
        let tmp = listHead;
        while(tmp.nextNode !== null) {
            tmp = tmp.nextNode;
        }
        tmp.nextNode = newNode; 
    }

    const prepend = (node) => {
        let newNode = new Node(node);
         listSize++;
        if(listHead === null) {
            listHead = newNode;
            return;
        }
        let tmp = listHead;
        listHead = newNode;
        listHead.newNode = tmp;
    }

    const head = () => {
        if(listHead === null) return;
        return listHead.value;
    }   

    const tail = () => {
        if(listHead === null) return;
        let tmp = listHead;
        while(tmp.nextNode !== null){
            tmp = tmp.nextNode;
        }
        return tmp.value;
    }

    const at = (index) => {
         if (listHead === null) return;
         let index_counter = 0;
         if(index === 0){
            return listHead;
         }
         let tmp = listHead;
         while(tmp.nextNode !== null){
            index_counter++;
            tmp = tmp.nextNode;
            if(index_counter === index) {
                return tmp.value;
            }
         }
         console.log("index out of range!");
         return;
    }

    const pop = () => {
         if (listHead === null) return;
         let tmp = listHead;
         let prev = null;
         while(tmp.nextNode !== null) {
            prev = tmp;
            tmp = tmp.nextNode;
         }
         prev.nextNode = null;
         listSize--;
    }

    const contains = (value) => {
         if (listHead === null) return;
         let tmp = listHead;
         while(tmp.nextNode !== null) {
            if(tmp.value === value){
                return true;
            }
            tmp = tmp.nextNode;
         }
        if (tmp.value === value) {
          return true;
        }
        return false;
    }

    const find = (value) => {
        if (listHead === null) return;
        let tmp = listHead;
        let counter = 0;
        while(tmp.nextNode !== null){
            if(tmp.value === value) {
                return counter;
            }
            counter++;
            tmp = tmp.nextNode;
        }
        if (tmp.value === value) {
          return counter;
        }
        return null;
    }

   const toString = () => {
        if (listHead === null) return;
        let tmp = listHead;
        let string = "";
        while (tmp.nextNode !== null) {
            string += `(${tmp.value}) ->`;
            tmp = tmp.nextNode;
        }
       string +=`(${tmp.value}) -> null`;
       console.log(string);
    }
    const size = () => {
      return listSize;
    };

    return {

        append,
        prepend,
        find,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        toString
    }


} 

const list = linkedList();

list.append("one");
list.append("two");
list.toString();
console.log("list.head: " + list.head());
console.log("list.tail: " + list.tail());
console.log("list.at index 1: " + list.at(1));
console.log("list.at index 10: ");
list.at(10);

console.log("listSize(): " + list.size());
console.log("pop() is used");
list.pop();
console.log("listSize(): " + list.size());
list.toString();
console.log("value one is at index: " + list.find("one"));
console.log("value eins is at index: " + list.find("eins"));
console.log("Value one is found in list? " + list.contains("one"));
console.log("Value eins is found in list? " + list.contains("eins"));
