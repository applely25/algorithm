가격, 개수, 돈 = map(int, input().split())
필요한돈 = 가격*개수-돈
if(필요한돈 >= 0):
    print(필요한돈)
else: print("0")