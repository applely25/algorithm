n = int(input())
while(n):
    arr = list(str(n))
    arr2 = arr[::-1]
    if(arr == arr2): print("yes")
    else: print("no")

    n = int(input())