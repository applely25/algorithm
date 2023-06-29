function solution(num) {
    let count = 0;
    while(num !== 1){
        if(count > 500 || num <= 0) return -1
        count += 1;
        if(num % 2){
            num *= 3;
            num ++;
        }else{
            num /= 2;
        }
    }
    return count
}