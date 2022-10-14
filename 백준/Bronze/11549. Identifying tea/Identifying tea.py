tea = int(input())
list = list(map(int, input().split()))
cnt = 0
for i in list:
    if(tea == i):
        cnt += 1
print(cnt)