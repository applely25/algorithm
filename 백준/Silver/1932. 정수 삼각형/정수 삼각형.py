d = [[0]*(i+1) for i in range(int(input()))]

d[0][0] = int(input())

for i in range(1, len(d)):
  a = list(map(int, input().split(" ")))
  d[i][0] = d[i-1][0]+a[0]
  d[i][i] = d[i-1][i-1]+a[i]
  for j in range(1,i):
    d[i][j] = max(d[i-1][j-1], d[i-1][j]) + a[j]

print(max(d[-1]))