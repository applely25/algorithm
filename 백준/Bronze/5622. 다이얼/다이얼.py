def getNumber(c):
  if c=="A" or c=="B" or c=="C" : return 3
  elif c=="D" or c=="E" or c== "F" : return 4
  elif c=="G" or c=="H" or c== "I": return 5
  elif c=="J" or c=="K" or c== "L": return 6
  elif c=="M" or c=="N" or c== "O": return 7
  elif c=="P" or c=="Q" or c=="R" or c=="S": return 8
  elif c=="T" or c=="U" or c=="V": return 9
  else: return 10

s = list(input())
sumNum = 0

for i in s:
  sumNum += getNumber(i)

print(sumNum)