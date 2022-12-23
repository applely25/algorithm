n = int(input())
while(n):
    while(n//10):
        sum = 0
        arr = list(map(int, str(n)))
        for i in arr: sum += i
        n = sum
    print(n)
    n = int(input())