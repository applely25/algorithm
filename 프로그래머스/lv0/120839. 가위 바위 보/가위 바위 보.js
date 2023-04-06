function solution(rsp) {
    return rsp.split("").map(v=>{
        if(v == "2") return "0"
        else if(v == "0") return "5"
        else return "2"
    }).join("")
}