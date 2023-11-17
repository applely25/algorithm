n = int(input())
person = list(map(int, input().split(" ")))[:n]
person.sort()
sum = 0
for i in range(n):
  for j in range(i+1):
    sum += person[j]

print(sum)