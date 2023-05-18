function solution(survey, choices) {
    const obj = { R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};
    let answer = ''
    const resultArr = [['R','T'],['C','F'],['J','M'],['A','N']];
    
    survey.map((sur, i)=>{
        const arr = sur.split("");
        const score = choices[i];
        if(score  == 1 || score == 2 || score == 3) obj[arr[0]] += 4-score;
        else obj[arr[1]] += score-4;
    })  
    
    resultArr.map(d => answer += obj[d[0]] >= obj[d[1]] ? d[0]: d[1] )
    
    return answer
}