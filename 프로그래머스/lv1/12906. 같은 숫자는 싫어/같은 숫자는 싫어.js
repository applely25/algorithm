function solution(arr)
{
    var answer = [];
    arr.forEach(value=>{
        if(value !== answer[answer.length - 1])
            answer.push(value)
    })
    
    return answer;
    
    // arr.filter((value, index)=>value !== arr[index-1])
}