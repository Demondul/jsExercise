function Node(val){
    this.val=val;
    this.next=null;
}

function queueList(){
    this.head=null;
    this.tail=null;
}

function queuePop(qList){
    if(qList.head!==null && qList.head==qList.tail){
        var theHead=qList.head;
        qList.head=null;
        qList.tail=null;
        return theHead;
    }
    else if(qList.head!==null){
        var theHead=qList.head;
        qList.head=qList.head.next;
        theHead.next=null;
        return theHead
    }
    else{
        return null;
    }
}

function queuePush(qList,Val){
    if(qList.head===null && qList.tail===null){
        qList.tail=new Node(Val);
        qList.head=qList.tail;
    }
    else{
        qList.tail.next=new Node(Val);
        qList.tail=qList.tail.next;
    }
    return qList;
}

var listQueue=new queueList();
console.log("====PUSH====")
console.log(queuePush(listQueue,1));
console.log(listQueue)
console.log(queuePush(listQueue,2));
console.log(listQueue)
console.log(queuePush(listQueue,3));
console.log(listQueue)
console.log(queuePush(listQueue,4));
console.log(listQueue)
console.log("====POP====")
console.log(queuePop(listQueue));
console.log(listQueue)
console.log(queuePop(listQueue));
console.log(listQueue)
console.log(queuePop(listQueue));
console.log(listQueue)
//console.log(listQueue);