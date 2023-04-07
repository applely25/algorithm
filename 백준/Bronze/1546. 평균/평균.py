sum = 0
n = int(input())
l = list(map(int, input().split()))
l.sort();
M = l[-1]
for i in l:
  sum = sum + i/M*100 
print(sum/n)