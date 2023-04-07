l = [0 for _ in range(30)]
for i in range(28):
  n = int(input())
  l[n-1] = 1
for i in range(30):
  if(l[i] == 0): print(i+1)