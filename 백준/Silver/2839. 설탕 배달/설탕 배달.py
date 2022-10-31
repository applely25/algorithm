kg = int(input())
f = kg//5
r = (kg-f*5)//3
while(f*5+r*3 != kg):
    r+=1
    if(r>=5):
        r-=5
        f-=1
    if(f<0):
        print("-1")
        exit()
print(f+r)