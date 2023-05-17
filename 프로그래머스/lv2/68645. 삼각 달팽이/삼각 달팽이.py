def solution(n):
    answer = [[0]*(i+1) for i in range(n)]
    num = 1
    idx = 1
    row = -1
    col = 0
    
    while n>0:
        for _ in range(n):
            row += idx
            answer[row][col] = num
            num+=1
        n-=1
        for _ in range(n):
            col += idx
            answer[row][col] = num
            num+=1
        n-=1
        for _ in range(n):
            col -= idx
            row -= idx
            answer[row][col] = num
            num+=1
        n-=1
    return sum(answer, [])