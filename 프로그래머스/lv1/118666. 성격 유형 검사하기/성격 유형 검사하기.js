function solution(survey, choices) {
    const obj = { R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};
    let answer = ''
    
    survey.map((sur, i)=>{
        const arr = sur.split("");
        const score = choices[i];
        if(score  == 1 || score == 2 || score == 3) obj[arr[0]] += 4-score;
        else obj[arr[1]] += score-4;
    })  
    
    if(obj['R'] >= obj['T']) answer+='R'
    else answer+='T'
    if(obj['C'] >= obj['F']) answer+='C'
    else answer+='F'
    if(obj['J'] >= obj['M']) answer+='J'
    else answer+='M'
    if(obj['A'] >= obj['N']) answer+='A'
    else answer+='N'
    
    return answer
}