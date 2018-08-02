function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var ave = 0;
  
    for(var i=0;i<arr.length;i++){
      ave += arr[i];
      if(arr[i] > max){
        max = arr[i];
      }
      if(arr[i] < min){
        min = arr[i]
      }
    }
  
    ave = ave / arr.length;
  
    return "The minimum is " + min + ", the maximum is " + max + ", and the average is " + ave
  }
  
  console.log(maxMinAvg([1, -2, 9, 4]))