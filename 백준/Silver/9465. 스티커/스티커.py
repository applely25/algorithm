for _ in range(int(input())):
  size = int(input())
  sticker = [[0]*2 for _ in range(size)]
  d = [[0]*3 for _ in range(size)]

  for i in range(2):
    dList = list(map(int, input().split()))
    for j in range(size):
      sticker[j][i] = dList[j]
  
  d[0] = [0, sticker[0][0], sticker[0][1]]

  for i in range(1, size):
    d[i][0] = max(d[i-1])
    d[i][1] = sticker[i][0] + max(d[i-1][0], d[i-1][2])
    d[i][2] = sticker[i][1] + max(d[i-1][0], d[i-1][1])

  print(max(d[size-1]))