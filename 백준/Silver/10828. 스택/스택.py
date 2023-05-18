import sys
stack = []
length = 0

n = int(input())

for _ in range(n):
  code = sys.stdin.readline().split()

  if code[0] == "push":
    stack.append(code[1])
    length+=1

  elif code[0] == "pop":
    if length == 0: print(-1)
    else:
      print(stack.pop())
      length -= 1

  elif code[0] == "size":
    print(length)

  elif code[0] == "empty":
    if(length == 0): print(1)
    else: print(0)

  elif code[0] == "top":
    if(length == 0): print(-1)
    else: print(stack[length-1])