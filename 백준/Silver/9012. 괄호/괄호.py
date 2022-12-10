n = int(input())
for i in range(n):
    result = []
    printResult = "YES"
    arr = list(input())
    for j in range(len(arr)):
        if(arr[j] == "("):
            result.append(arr[j])
        else:
            if(len(result) == 0):
                printResult="NO"
                break;
            if(result.pop() != "("):
                printResult="NO"
                break;
    if(printResult == "YES" and len(result) == 0):
        print("YES")
    else: print("NO")