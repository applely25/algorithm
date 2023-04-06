def solution(array, height):
    answer = 0
    array.sort()
    for i in range(len(array)):
        if(array[i] > height):
            answer = len(array)-i
            break
    return answer