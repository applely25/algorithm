function solution(arr)
{    
    return arr.filter((value, index)=>value !== arr[index-1]);
}