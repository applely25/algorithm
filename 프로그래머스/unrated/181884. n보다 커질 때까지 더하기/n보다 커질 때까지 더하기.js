function solution(numbers, n) {
    let add = 0
    for (let i in numbers){
        add += numbers[i]
        if(add > n) return add
    }
}