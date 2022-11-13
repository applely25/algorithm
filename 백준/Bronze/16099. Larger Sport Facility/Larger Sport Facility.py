n = int(input())
for i in range(n):
    T1, T2, E1, E2 = map(int, input().split())
    W1 = T1 * T2
    W2 = E1 * E2
    if(W1 > W2): print("TelecomParisTech")
    elif(W1 < W2): print("Eurecom")
    else: print("Tie")