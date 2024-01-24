function solution(elements) {
    const result = new Set([...elements, elements.reduce((a,b)=>a+b,0)])
    const len = elements.length;
    elements = [...elements, ...elements];

    for(let i = 2; i<len; i++){
        for(let j = 0; j<len; j++){
            result.add(elements.slice(j, j+i).reduce((a,b)=>a+b,0))
        }
    }
    
    return result.size
}