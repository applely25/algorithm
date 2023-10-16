for _ in range(int(input())):
  sticker = [0,0]
  d = [[0]*3 for _ in range(int(input()))]

  sticker[0] = list(map(int, input().split()))
  sticker[1] = list(map(int, input().split()))
  
  d[0] = [0, sticker[0][0], sticker[1][0]]

  for i in range(1, len(d)):
    d[i][0] = max(d[i-1])
    d[i][1] = sticker[0][i] + max(d[i-1][0], d[i-1][2])
    d[i][2] = sticker[1][i] + max(d[i-1][0], d[i-1][1])

  print(max(d[-1]))