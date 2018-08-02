function bubbleSort(arr){
    for(var i=arr.length-1; i>0 ;i--){
        for(var n=1;n<=i;n++){
            if(arr[n-1]>=arr[n]){
                var temp=arr[n-1];
                arr[n-1]=arr[n];
                arr[n]=temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([1,3,5,6,2,4,7,8]));