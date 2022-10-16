sum1 = 0
sum2 = 0
li1 = list(map(int, input().split()))
li2 = list(map(int, input().split()))

for i in li1: sum1 += i
for i in li2: sum2 += i
if(sum1>sum2): print(sum1)
else: print(sum2)