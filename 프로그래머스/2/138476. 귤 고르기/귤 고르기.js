function solution(k, tangerine) {
    const fruit = {};
    tangerine.map(v=>{
        if(fruit[v]) fruit[v]++;
        else fruit[v] = 1;
    })
    const sizeArr = Object.values(fruit).sort((a,b)=>(b-a));
    for(let i = 0; i<sizeArr.length; i++){
        k -= sizeArr[i];
        if(k<=0) return i+1;
    }
}