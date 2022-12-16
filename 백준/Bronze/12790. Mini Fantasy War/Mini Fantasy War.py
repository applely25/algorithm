n = int(input())
for i in range(n):
    arr = list(map(int, input().split()))
    hp = arr[0]+arr[4]
    mp = (arr[1]+arr[5])
    attack = (arr[2]+arr[6])
    defense = (arr[3]+arr[7])
    if(hp < 1): hp = 1
    if(mp < 1): mp = 1
    if(attack < 0): attack = 0
    print(hp+mp*5+attack*2+defense*2)