n = int(input())
d = [[0,0] for _ in range(n)]

d[0][0] = 0
d[0][1] = 1

for i in range(1, n):
  d[i][0] = d[i-1][0] + d[i-1][1]
  d[i][1] = d[i-1][0]

print(d[n-1][0] + d[n-1][1])