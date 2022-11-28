import datetime
y1,m1,d1 = map(int, input().split())
y2,m2,d2 = map(int, input().split())

day1 = datetime.date(y1, m1, d1)
day2 = datetime.date(y2, m2, d2)

DDay = day2 - day1

if(DDay.days >= 365243): print("gg")
else: print(f"D-{DDay.days}")