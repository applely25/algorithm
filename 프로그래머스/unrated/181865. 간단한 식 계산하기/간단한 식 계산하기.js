function solution(binomial) {
    binomial = binomial.split(" ");
    switch(binomial[1]){
        case "+": return +binomial[0] + +binomial[2]
        case "-": return +binomial[0] - +binomial[2]
        case "*": return +binomial[0] * +binomial[2]
    }
}