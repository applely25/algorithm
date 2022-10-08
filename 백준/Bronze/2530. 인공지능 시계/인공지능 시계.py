h,m,s = map(int, input().split())
cook = int(input())
finish = h * 3600 + m * 60 + s + cook
h = finish//3600
m = finish//60 - h*60
s = finish%60
while(h > 23):
    h-=24
print(h, m, s)