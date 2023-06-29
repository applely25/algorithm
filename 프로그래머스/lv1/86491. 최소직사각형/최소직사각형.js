function solution(sizes) {
    sizes = sizes.map(d=>{
        if(d[0] > d[1]) [d[0], d[1]] = [d[1], d[0]] 
        return d
    })
    let w = Math.max(...(sizes.map(d=> d[0])))
    let h = Math.max(...(sizes.map(d=> d[1])))

    return w*h
}