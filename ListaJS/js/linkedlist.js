class LinkedList{
    
    constructor(){
        this.head = null;
        this.length = 0;
    }

    show (separator=', '){
        let current = this.head,
            output = '';
        if(current!=null){
            output += current.content;
            while(current.next){
                current = current.next;
                output += separator + current.content;
            }
        }
        return output;
    }
    
    append(element){
        let node = new Node(element),
            current = this.head;
        if(this.isEmpty()){
            this.head = node;
        } else{
            while(current.next)
                current = current.next;
            current.next = node;
        }
        this.length++;
    }

    insert(position, element){
        if(position > -1 && position <= this.size()){
            let node = new Node(element),
                current = this.head,
                previous = null,
                index=0;
            if(position==0){
                node.next = this.head;
                this.head = node;
            } else {
                while(index<position){
                    index++;
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                previous.next=node;
            }
            this.length++;
            return true;
        }
        return false;
    }
    
    removeAt(position){
        if(position > -1 && position < this.size()){
            let current = this.head,
                previous = null,
                index=0;
            if(position===0){
                this.head = current.next;
            } else {
                while(index<position){
                    index++;
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
            }
            current.next=null;
            this.length--;
            return current.content;
        }
        return null;
    }
    
    remove(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    }
    
    indexOf(element){
        let current = this.head,
            index = 0;
        while(current!==null){
            if(current.content===element){
                return index;
            }
            index++
            current = current.next;
        }
        return -1;
    }
    
    isEmpty(){
        return this.head === null;
    }
    
    size(){
        return this.length;
    }
    
    getElement(position){
        let current = this.head,
            index = 0;
            while(current!==null){
                if(index===position){
                    return current.content;
                }
                index++
                current = current.next;
            }
            return null;
    }

    search(value){
        return this.indexOf(value) >= 0;
    }

}