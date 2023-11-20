w = int(input())
d=[1]+[ 0 for _ in range(w)]

for i in range(2,w+1,2):
  d[i] = 3*d[i-2] + sum(d[:i-2])*2

print(d[w])