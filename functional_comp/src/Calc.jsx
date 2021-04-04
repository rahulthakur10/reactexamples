function add(a,b){
    let sum = a+b ;
    return sum ;
}


function sub(a,b){
    let sub = a-b ;
    return sub ;
}

function mul(a,b){
    let m = a*b ;
    return m ;
}

function div(a,b){
    let d = a/b ;
    d = d.toFixed(2);
    return d ;
}
export { add , sub , mul , div } ;