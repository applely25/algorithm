n = int(input())
li = list(map(int, input().split(" ")))

d = [0]*n
for i in range(n):
  d[i] = li[i]
  for j in range(i):
    if(li[j] < li[i] and d[i] < d[j]+li[i]):
      d[i] = d[j]+li[i]

print(max(d))