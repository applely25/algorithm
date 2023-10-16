n = int(input())
d = [[0]*3 for _ in range(n)]

d[0] = [0,int(input()), 0];

for i in range(1,n):
  wine = int(input())
  d[i][0] = max(d[i-1])
  d[i][1] = d[i-1][0] + wine
  d[i][2] = d[i-1][1] + wine

print(max(d[n-1]))