n = int(input())

if(n <= 2):
  print(n)
  
else:
  d = [0 for _ in range(n+1)]
  d[1] = 1
  d[2] = 2

  for i in range(3, n+1):
    d[i] = d[i-1]+d[i-2]
  
  print(d[n]%10007)
