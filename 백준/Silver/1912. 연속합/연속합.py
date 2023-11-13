n = int(input())
d = [0]*n
li = list(map(int, input().split(" ")))
d[0] = li[0]
for i in range(1,n):
  d[i] = max(li[i], li[i]+d[i-1])

print(max(d))