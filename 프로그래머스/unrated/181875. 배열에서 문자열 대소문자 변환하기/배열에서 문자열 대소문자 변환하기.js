function solution(strArr) {
    return strArr.map((d,i)=>{
        if(i%2){
            return d.toUpperCase()
        }
        else{
            return d.toLowerCase()
        }
    })
    
}