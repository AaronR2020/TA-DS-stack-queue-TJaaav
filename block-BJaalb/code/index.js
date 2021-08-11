class Stack {
    
    constructor(capacity)
    {
        this.cap=capacity;
        this.items = [];
    }
push(element){
    if(this.items.length==this.cap){
        return 'capacity reached'
    }
    else{
        return this.items.push(element);
    }
}
pop(){
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
}
peek(){
    return this.items[this.items.length - 1];
}
isEmpty(){
    return this.items.length == 0;
}
printStack(){
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
}

}