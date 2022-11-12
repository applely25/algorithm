n = int(input())
for i in range(n):
    arr = list(map(int, input().split()))
    arr = arr[1:]
    arr.sort()
    gap = 0
    for j in range(len(arr)-1):
        if(arr[j+1]-arr[j] > gap):
            gap = arr[j+1]-arr[j]
    print("Class",i+1)
    print("Max",arr[len(arr)-1], end="")
    print(", Min",arr[0],end="")
    print(", Largest gap",gap)