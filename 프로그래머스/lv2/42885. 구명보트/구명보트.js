function solution(people, limit) {
    let cnt = 0;
    people.sort((a,b) => b-a)
    
    for(let i = 0, j = people.length-1; i<=j; i++, cnt++){
        if(people[i] + people[j] <= limit)
            j--
    }
    
    return cnt;
}