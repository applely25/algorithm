for _ in range(int(input())):
  n = int(input())
  d = [1,1,1,2,2] + [0 for _ in range(5,n)]
  for i in range(5, n):
    d[i] = d[i-1] + d[i-5]
  print(d[n-1])