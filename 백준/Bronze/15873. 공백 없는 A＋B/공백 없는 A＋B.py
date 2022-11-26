n = input()
if(len(n) == 2):
    print(int(n[0])+ int(n[-1]))
elif(len(n) == 3):
    if(n[-1] == "0"):
        print(int(n[0]) + int(n[1]+n[-1]))
    else: print(int(n[0]+n[1]) + int(n[-1]))
else: print(20)