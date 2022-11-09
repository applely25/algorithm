a1, o1 = map(int, input().split())
a2, o2 = map(int, input().split())
if(a1+o2 > o1+a2): print(o1+a2)
else: print(a1+o2)