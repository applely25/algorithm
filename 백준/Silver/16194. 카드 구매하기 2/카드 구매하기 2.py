n = int(input())
p = list(map(int, input().split(" ")))

d = [0]*(n+1)

d[1] = p[0]

for i in range(2, n+1):
  minprice = []
  for j in range(0,min(n,i)):
    minprice.append(p[j] + d[i-j-1])
  d[i] = min(minprice)

print(d[n])