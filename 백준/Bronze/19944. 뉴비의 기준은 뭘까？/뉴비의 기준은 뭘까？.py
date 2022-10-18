m,n = map(int, input().split())
if(n == 1 or n == 2): print("NEWBIE!")
elif(m<n): print("TLE!")
else: print("OLDBIE!")