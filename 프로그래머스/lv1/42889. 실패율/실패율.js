function solution(N, stages) {
    let answer = [], people = {};
    let peopleCount = stages.length;
    for(let i = 1; i<=N; i++) people[i] = 0;
    stages.sort((a,b)=> a-b).map(d=> {if(d != N+1) people[d] += 1})
    for(let i in people){
        let count = people[i];
        people[i] /= peopleCount;
        peopleCount -= count;
    }
    return Object.entries(people).sort((a,b)=> b[1] - a[1]).map(d=>Number(d[0]))
}