function solution(phone_number) {
    let len = phone_number.length - 4
    return "*".repeat(len) + phone_number.substr(len)
}