function solution(answers) {
    let user1 = [1, 2, 3, 4, 5]
        ,user2 = [2, 1, 2, 3, 2, 4, 2, 5]
        ,user3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0,0,0];
    answers.map((d,i)=>{
        if(d === user1[i%5]) count[0]++;
        if(d === user2[i%8]) count[1]++;
        if(d === user3[i%10]) count[2]++;
    })
    return count.map((d,i)=> Math.max(...count) === d && i+1 ).filter(d=> d!==false)
}