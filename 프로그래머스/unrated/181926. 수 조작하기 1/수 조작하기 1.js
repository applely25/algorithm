function solution(n, control) {
    control.split("").map(d=>{
        if(d == "w") n+=1
        else if(d == "s") n-=1
        else if(d == "d") n+= 10
        else n-= 10
    })
    return n
}