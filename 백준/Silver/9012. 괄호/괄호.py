n = int(input())
for i in range(n):
    arr = list(input())
    result = 0
    for j in arr:
        if(j == "("): result+=1
        else: result-=1
        if(result < 0):
            print("NO")
            break;
    if(result > 0):
        print("NO")
    elif(result == 0): print("YES")
