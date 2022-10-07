def score(list=[]):
    print(list[0]*6 + list[1]*3 + list[2]*2 + list[3] + list[4]*2)

list1 = list(map(int, input().split()))
list2 =  list(map(int, input().split()))

score(list1)
score(list2)