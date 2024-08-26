const permutation = (permu, rests, output) => {
    if (rests.length == 0) {
        return output.push(permu);
    }
    rests.forEach((v,idx) => {
        const rest = [...rests.slice(0,idx), ...rests.slice(idx+1)]
        permutation([...permu,v], rest, output);
    })
}

function solution(k, dungeons) {
    const output = [];
    permutation([], dungeons, output);
    let result = 0
    for(i of output){
        let leftK = k;
        let j = 0
        for(; j<i.length; j++){
            if(leftK >= i[j][0]) leftK -= i[j][1]
            else break
        }
        if(result < j+1) result = j
        if(result == dungeons.length) return result
    }
    return result

}