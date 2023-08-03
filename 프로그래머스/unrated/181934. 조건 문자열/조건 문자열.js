function solution(ineq, eq, n, m) {
    if(ineq === "<"){ if(n < m) return 1} 
    else { if(n > m) return 1} 
    
    if(eq === "="){ if(n === m) return 1 }
    return 0 
}