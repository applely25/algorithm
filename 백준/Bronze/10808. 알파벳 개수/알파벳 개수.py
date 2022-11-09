word = list(input())
arr = [0 for i in range(26)]
for i  in range(len(word)):
    arr[ord(word[i])-97] += 1
for i in range(26):
    print(arr[i], end=" ")