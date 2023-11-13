stair = [0]
n = int(input())
d = [0]*(n+1)

for i in range(n):
  stair.append(int(input()))

d[1] = stair[1]
if(len(stair) > 2):
  d[2] = stair[1]+stair[2]

for i in range(3, n+1):
  d[i] = max(d[i-2], d[i-3]+stair[i-1]) + stair[i]

print(d[n])