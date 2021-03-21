let map = new Map()
function fn(n) {
    if(n<1){
        return 0
    }
    if(n==1){
        return 1
    }
    if(n==2){
        return 2
    }
    let a = 1,
        temp = 0,
        b = 2;
    // a是一阶跨有一种方法 b是二阶有两种方法  temp是总共有的方法
    for (let i = 3; i <= n; i++) {
        temp = a + b  //
        a = b
        b = temp
    }
}
let n = fn(10)
console.log(n);