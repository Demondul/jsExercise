function pancakes(){
  this.top=null;
}

function Node(val){
  this.val=val;
  this.next=null;
}

function push(stack,val){
  var cake = new Node(val);
  cake.next = stack.top;
  stack.top = cake;
  return stack;
}

function removeTop(stack){
  if (stack.top != null){
    var cake = stack.top;
    stack.top = cake.next;
    cake.next = null;
    console.log(cake);
    return cake;
  } else {
    return null;
  }
}

var hotcakes = new pancakes();
push(hotcakes, 1)
push(hotcakes, 92929)
push(hotcakes, 34)
console.log(hotcakes)