function solution(price) {
    if(price >= 500000) return ~~(price*0.8);
    else if(price >= 300000) return ~~(price*0.9);
    else if(price >= 100000) return ~~(price*0.95);
    return price
}