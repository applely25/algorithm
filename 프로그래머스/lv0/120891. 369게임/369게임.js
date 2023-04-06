function solution(order) {
    return order.toString().split("").filter(v => !(v%3) && v != 0).length
}