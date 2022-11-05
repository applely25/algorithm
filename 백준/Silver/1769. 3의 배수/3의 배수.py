arr = list(input())
sum = 10
if(len(arr) <= 1):
    sum = int(arr[0])
count = 0
while(sum >= 10):
    sum = 0
    for i in arr:
        sum += int(i)
    arr = list(str(sum))
    count += 1
print(count)
if(sum%3 == 0): print("YES")
else: print("NO")
