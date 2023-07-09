function solution(a, b) {
    if(a%2 && b%2) return a*a+b*b
    else if(a%2 || b%2) return 2*(a+b)
    else return a>b ? a-b : b-a
}