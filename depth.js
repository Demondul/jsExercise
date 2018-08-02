function BST(){
    self=this;
    this.root=null;
}

function Node(val){
    this.value=val;
    this.left=null;
    this.right=null;
}

BST.prototype.insert=function(val){
    var node = new Node(val);
    var runner = self.root;
    var parent = runner;
    console.log(runner)
    if(runner==null){
        self.root=node;
        console.log("first node inserted")
    }
    else{
        parent = insertToThisNode(runner,val)
        console.log(parent);
        if(val<=parent.value){
            parent.left=node;
        }
        else if(val>parent.value){
            parent.right=node;
        }
    }

    function insertToThisNode(runner,val){
        console.log("recursing");
        if(val<=runner.value){
            if(runner.left!=null){
                console.log("going left");
                return insertToThisNode(runner.left,val);
            }
            else{
                console.log("Found it in left!", runner);
                return runner;
            }
        }
        if(val>runner.value){
            if(runner.right!=null){
                console.log("going right");
                return insertToThisNode(runner.right,val);
            }
            else{
                console.log("Found it in right!",runner);
                return runner;
            }
        }
    }

    return this;
}

BST.prototype.getDepth=function(branch=self.root){
    if(branch==null){
        console.log(0);
    }
    else{
        console.log(branch.getDepth());
    }

}

Node.prototype.getDepth=function(){
    var iLeft=0;
    var iRight=0;
    if(!this.left && !this.right){
        // console.log(this.value);
        return 1;
    }
    else if(!this.right && this.left){
        iLeft = 1 + this.left.getDepth();
        // console.log(this.value);
    }
    else if(!this.left && this.right){
        iRight = 1 + this.right.getDepth();
        // console.log(this.value);
    }
    else{
        if(this.left){
            iLeft = 1 + this.left.getDepth();
            // console.log(this.value);
        }
        if(this.right){
            iRight = 1 + this.right.getDepth();
            // console.log(this.value);
        }
    }
    if(iRight>=iLeft){
        return iRight;
    }
    else{
        return iLeft;
    }
}

first = new BST();

// first.insert(30).insert(40).insert(25).insert(50);
first.insert(40).insert(20).insert(19).insert(25).insert(24).insert(26).insert(50);
console.log(first);
first.getDepth();