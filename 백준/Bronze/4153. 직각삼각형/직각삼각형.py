a,b,c = map(int, input().split())
while(a != 0 and b!= 0 and c!= 0):
    li = [a,b,c]
    li.sort()
    if(pow(li[0],2) + pow(li[1],2)  == pow(li[2],2)): print("right")
    else: print("wrong")
    a, b, c = map(int, input().split())

