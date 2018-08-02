function Stack() {
  this.top = null;
}
function Node(val){
  this.val = val;
  this.next = null;
}
function removeMinVal(stack){
  if(stack.top === null){
    return null;
  } 

  else {
    var temp = stack.top;
    var runner = stack.top;
    while(runner.next){
      if(runner.next.val < temp.next.val){
        temp = runner;
      }
      runner = runner.next;
    }
  }
  if(temp.next.val > stack.top.val){
    stack.top = stack.top.next;
    return stack;
    }
  temp.next = temp.next.next;
  return stack;
}
var testStack=new Stack();
testStack.top = new Node(3);
testStack.top.next = new Node(1);
testStack.top.next.next = new Node(4);
//testStack.top.next.next.next = new Node(5);
//testStack.top.next.next.next.next = new Node(7);
console.log(testStack);
removeMinVal(testStack);
console.log(testStack);