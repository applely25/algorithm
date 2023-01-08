arr = []
for i in range(int(input())):
    arr.append(list(map( int, input().split())))
arr.sort(key=lambda x:-x[2])
result = []
for i in arr:
    check = 0
    for j in result:
        if(j[0] == i[0]):
            check += 1
    if(check < 2 and len(result) < 3):
        result.append(i)
for i in result:
    print(i[0], i[1])