def solution(n):
    answer = 0
    for i in range(n//2):
        answer += i+1
    return answer*2