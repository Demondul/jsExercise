function coinChange(obj){
    var cents=0;
    if(typeof obj==='object'){
        if('dollars' in obj && typeof obj['dollars']==='number'){
            cents=cents+(obj['dollars']*100);
        }
        if('quarters' in obj && typeof obj['quarters']==='number'){
            cents=cents+(obj['quarters']*25);
        }
        if('dimes' in obj && typeof obj['dimes']==='number'){
            cents=cents+(obj['dimes']*10);
        }
        if('pennies' in obj && typeof obj['pennies']==='number'){
            cents=cents+(obj['pennies']*1);
        }
    }
    else if(typeof obj==='number'){
        cents=obj;
    }
    else{
        return null;
    }
    
    var dollars=Math.floor(cents/100);
    cents=cents%100;
    var quarters=Math.floor(cents/25);
    cents=cents%25;
    var dimes=Math.floor(cents/10);
    cents=cents%10;
    var nickels=Math.floor(cents/5);
    cents=cents%5;
    
    var money={};

    if(dollars!=0){
        money['dollars']=dollars;
    }
    if(quarters!=0){
        money['quarters']=quarters;
    }
    if(dimes!=0){
        money['dimes']=dimes;
    }
    if(nickels!=0){
        money['nickels']=nickels;
    }
    if(cents!=0){
        money['pennies']=cents;
    }

    return money;
}

console.log(coinChange(78));
console.log(coinChange(312));
console.log(coinChange({dollars: 2, dimes: 15, pennies: 5}));