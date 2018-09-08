function add(num1,num2) {
    var arr1 = num1.split('');
    var arr2 = num2.split('');
    var total = [];
    var carry = 0;
    var sub = [];

    if(arr1.length >= arr2.length){
        for(var i=0;i<(arr1.length - arr2.length)-1;i++){
            sub.push(arr1[i])
        }
    }
    else{
        for(var i=0;i<(arr2.length - arr1.length)-1;i++){
            sub.push(arr2[i])
        }
    }

    while(arr1.length != 0 && arr2.length != 0){
        var addend1 = Number(arr1.pop());
        var addend2 = Number(arr2.pop());
        var sum = addend1 + addend2 + carry;
        console.log(addend1 + ' + ' + addend2 + ' = ' + sum);
        if(sum > 9){
            carry = Math.floor(sum / 10);
            sum = sum % 10;
        }
        else {
            carry = 0;
        }

        console.log(addend1 + ' + ' + addend2 + ' = ' + sum);
        console.log('carry: ' + carry);

        total.push((sum).toString());
    }

    if(carry > 0 && sub.length > 0){
        sub[sub.length-1] = (Number(sub[sub.length-1]) + carry).toString();
    }
    else if(carry > 0 && sub.length == 0){
        total[total.length-1] = (Number(total[total.length-1]) + carry).toString(); 
    }
    console.log('total: ' + total);
    total = total.reverse();
    console.log('reverse: ' + total);
    total = sub.concat(total);
    console.log('sub total: ' + total);

    return total.join('');
}

console.log('Result : ' + add('111','99999'));