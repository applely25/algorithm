n,k = map(int,input().split())
arr = [i+1 for i in range(n)]
c = 0
print("<", end="")
while(len(arr) > 1):
    c = (c + k - 1)%len(arr)
    print(arr[c], end=", ")
    arr.pop(c)
print(f'{arr[0]}>')