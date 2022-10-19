d,h,m = map(int, input().split())
t1 = d*1440+ h*60 + m
t2 = 11* (1440 + 60 + 1)
t = t1 - t2
if t < 0:
    print(-1)
else:
    print(t)