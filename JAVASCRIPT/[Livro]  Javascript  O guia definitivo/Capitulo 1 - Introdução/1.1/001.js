function abs(x){
    if(x >= 0){
        return x
    }else{
        return x
    }
}

function factorial1(n){
    var product = 1 
    while(n > 1){
        product *=n;
        n--;
    }
    return product
}

function factorial2(n){
    var product, i = 1;
    for(i=2; i <=n; i++){
        product *= i;
    }
    return product;
}


console.log(factorial1(4)) // => 24
console.log(factorial2(5)) // => 120