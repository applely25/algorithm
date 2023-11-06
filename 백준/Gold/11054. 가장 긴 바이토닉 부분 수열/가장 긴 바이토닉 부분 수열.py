n = int(input())
li = list(map(int, input().split(" ")))

d1= [1]*n
d2= [1]*n
sumd = []

for i in range(1,n):
  for j in range(i):
    if(li[j] < li[i]):
        d1[i] = max(d1[j]+1,d1[i])

for i in range(n-1,-1,-1):
  for j in range(i,n):
    if(li[j] < li[i]):
      d2[i] =  max(d2[j]+1,d2[i])

for i in range(len(d1)):
  sumd.append(d1[i]+d2[i]-1)

print(max(sumd))