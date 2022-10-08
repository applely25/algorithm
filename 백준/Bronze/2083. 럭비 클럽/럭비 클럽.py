str,age, weight = input().split()
while(str != "#"):
    print(str, end=" ")
    if(int(age) > 17 or int(weight) >=80): print("Senior")
    else: print("Junior")
    str, age, weight = input().split()
