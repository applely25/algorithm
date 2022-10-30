n = int(input())
for i in range(n):
    r,s = input().split()
    str = list(s)
    for j in str:
        print(j*int(r), end="")
    print()