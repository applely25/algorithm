a = list(input().lower())
while(a != ['#']):
    cnt = 0
    for i in a:
        if(i == "a" or i == "e" or i == "i" or i == "o" or i == "u"):
            cnt += 1
    print(cnt)
    a = list(input().lower())
