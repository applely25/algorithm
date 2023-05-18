import sys
stack = []

n = int(input())

for _ in range(n):
  code = sys.stdin.readline().split()

  if code[0] == "push":
    stack.append(code[1])

  elif code[0] == "pop":
    if len(stack) == 0: print(-1)
    else:
      print(stack.pop())

  elif code[0] == "size":
    print(len(stack))

  elif code[0] == "empty":
    if(len(stack) == 0): print(1)
    else: print(0)

  elif code[0] == "top":
    if(len(stack) == 0): print(-1)
    else: print(stack[-1])