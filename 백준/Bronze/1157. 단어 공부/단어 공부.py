str = list(input())
arr = [0 for i in range(26)]
result = []
for i in str:
    arr[ord(i.lower())-97] += 1
max = max(arr)
for i in range(len(arr)):
    if(arr[i] == max): result.append(chr(i+97))

if(len(result) == 1):
    print(result[0].upper())
else: print("?")