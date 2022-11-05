a = int(input())
b = int(input())
c = int(input())
count = 0
if(a+b+c == 180):
    if(a == b == c): print("Equilateral")
    elif(a == b or b==c or c==a): print("Isosceles")
    else: print("Scalene")
else:
    print("Error")