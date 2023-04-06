function solution(num_list) {
    let odd = 0;
    let even = 0;
    num_list.forEach(number=>{
        if(number%2) odd++;
        else even++;
    })
    return [even,odd];
}