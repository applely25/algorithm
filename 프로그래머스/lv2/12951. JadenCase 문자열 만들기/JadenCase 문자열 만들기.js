function solution(s) {
    s = s.toLowerCase().split(" ").map(d=>{
        d = d.split("")
        if(d.length){
            d[0] = d[0].toUpperCase()
            return d.join("")
        }
    })
    return s.join(" ")
}