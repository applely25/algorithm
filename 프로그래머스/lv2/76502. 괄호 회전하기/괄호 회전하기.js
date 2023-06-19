const correct = (s) => {
    let stack = []
    for(let d in s){
        if(s[d] === "[" || s[d] === "{" || s[d] === "(" ) stack.push(s[d])
        else{
            if(stack.length){
                let top = stack.pop()
                if(!(top === "[" && s[d] === "]"
                   || top === "{" && s[d] === "}"
                   || top === "(" && s[d] === ")")){
                    return false
                }                    
            }else{
                return false
            }
        }
    }
    if(stack.length === 0) return true
    return false
}
function solution(s) {
    let result = 0
    s = s.split("")
    for(let i = 0; i<s.length; i++){
        result += correct(s)
        s.push(s.shift())
    }
    return result
}