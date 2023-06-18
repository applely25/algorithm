function solution(num_list) {
    let odd = 0, even = 0;
    num_list.map((n,i) => {
        if((i+1) % 2) odd += n
        else even += n
    })
    return Math.max(odd, even)
}