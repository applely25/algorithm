n = int(input())
a = []
d = [[0]*(i+1) for i in range(n)]

for _ in range(n):
  a.append(list(map(int, input().split(" "))))

d[0][0] = a[0][0]

for i in range(1, n):
  d[i][0] = d[i-1][0]+a[i][0]
  d[i][i] = d[i-1][i-1]+a[i][i]
  for j in range(1,i):
    d[i][j] = max(d[i-1][j-1], d[i-1][j]) + a[i][j]

print(max(d[n-1]))