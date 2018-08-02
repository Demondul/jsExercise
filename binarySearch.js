function binarySearch(arr,n){
    var bHalf=Math.floor(arr.length/2);
    var fHalf=0;
    var start=fHalf;
    var end=arr.length-1;

    if(arr[bHalf]<=n){
        start=bHalf;
        bHalf=start+Math.floor((end-bHalf)/2);
        if(arr[bHalf]<=n){
            start=bHalf;
        }
        else{
            end=bHalf;
        }
    }
    else{
        end=bHalf;
        fHalf=Math.floor(end/2);
        if(arr[fHalf]<=n){
            start=fHalf;
        }
        else{
            end=fHalf;
        }
    }

    var iCounter=1;
    for(var i=start;i<end;i++){
        console.log(iCounter);
        if(n==arr[i]){
            return i;
        }
        iCounter++;
    }

    return -1;
}

console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93));
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15));
