n = int(input())
li = []
for i in range(n):
    li.append(input())
li = list(dict.fromkeys(li))
li.sort()
li.sort(key=len)
for i in li:
    print(i)
