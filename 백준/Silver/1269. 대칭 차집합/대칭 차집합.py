n,m = map(int, input().split())
arr1 = list(input().split())
arr2 = list(input().split())
print(len(set(arr1)^set(arr2)))