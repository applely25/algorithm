function solution(my_string, is_prefix) {
    return Number(is_prefix === my_string.slice(0,is_prefix.length))
}