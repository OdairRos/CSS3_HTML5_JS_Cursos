let fac = function(x){
    let fat  = 1
    for(let c = x;c>1;c--){
        fat *= c
    }
    return fat
}

console.log(fac(5))