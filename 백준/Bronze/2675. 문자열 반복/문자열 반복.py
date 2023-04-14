for i in range(int(input())):
  n, s = input().split(" ");
  arr = ""
  for j in list(s):
    arr += j*int(n)
  print(arr)