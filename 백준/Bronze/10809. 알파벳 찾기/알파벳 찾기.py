l = [-1 for _ in range(26)]
s = list(input())
for i in range(len(s)):
  index = ord(s[i])-97
  if(l[index] == -1):
    l[index] = i
for i in l: print(i, end=" ")