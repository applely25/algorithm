const solution = arr => arr.map(d=>{
    if(d%2 == 1 && d<50) return d*2
    else if(d%2 == 0 && d>= 50) return d/2
    return d
})
