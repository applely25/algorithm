n = list(map(int, input().split()))
for i in n:
    if(i != 0 and i != 1):
        print("F")
        exit()
print("S")