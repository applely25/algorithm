bugger = []
drink = []
for i in range(3): bugger.append(int(input()))
for i in range(2): drink.append(int(input()))

bugger.sort()
drink.sort()

print(bugger[0] + drink[0] - 50)
