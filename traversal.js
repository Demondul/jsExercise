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
    // console.log(runner)
    if(runner==null){
        self.root=node;
        // console.log("first node inserted")
    }
    else{
        parent = insertToThisNode(runner,val)
        // console.log(parent);
        if(val<=parent.value){
            parent.left=node;
        }
        else if(val>parent.value){
            parent.right=node;
        }
    }

    function insertToThisNode(runner,val){
        // console.log("recursing");
        if(val<=runner.value){
            if(runner.left!=null){
                // console.log("going left");
                return insertToThisNode(runner.left,val);
            }
            else{
                // console.log("Found it in left!", runner);
                return runner;
            }
        }
        if(val>runner.value){
            if(runner.right!=null){
                // console.log("going right");
                return insertToThisNode(runner.right,val);
            }
            else{
                // console.log("Found it in right!",runner);
                return runner;
            }
        }
    }

    return this;
}

BST.prototype.preOrder=function(branch=self.root){
    if(branch!=null){
        console.log(branch.value);
        if(branch.left!=null){
            this.preOrder(branch.left)
            if(branch.right!=null){
                this.preOrder(branch.right);
                return;
            }
        }
        else if(branch.right!=null){
            this.preOrder(branch.right);
            return;
        }
        else{
            return;
        }
    }
}

BST.prototype.postOrder=function(branch=self.root){
    if(branch!=null){
        if(branch.left!=null){
            this.postOrder(branch.left)
            if(branch.right!=null){
                this.postOrder(branch.right);
                console.log(branch.value);
                return;
            }
        }
        else if(branch.right!=null){
            this.postOrder(branch.right);
            console.log(branch.value);
            return;
        }
        else{
            console.log(branch.value);
            return;
        }
    }
}

BST.prototype.inOrder=function(branch=self.root){
    if(branch!=null){
        // console.log("current node:",branch.value);
        if(branch.left!=null){
            this.inOrder(branch.left)
            console.log(branch.value);
            if(branch.right!=null){
                this.inOrder(branch.right);
                return;
            }
        }
        else if(branch.right!=null){
            console.log(branch.value);
            this.inOrder(branch.right);
            return;
        }
        else{
            console.log(branch.value);
            return;
        }
    }
}

first = new BST();

first.insert(40).insert(20).insert(25).insert(50);
// first.insert(40).insert(20).insert(19).insert(25).insert(24).insert(26).insert(50);
console.log(first);
console.log("Traversal: Pre-Order");
first.preOrder();
console.log("Traversal: Post-Order");
first.postOrder();
console.log("Traversal: In-Order");
first.inOrder();