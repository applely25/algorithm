n = float(input())
while(n):
    sum = 1.0
    plus = n
    sum += plus
    for i in range(3):
        plus *=n
        sum += plus

    print(format(sum, ".2f"))
    n = float(input())
