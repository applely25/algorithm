function solution(numbers, hand) {
    let answer = "";
    let left = [3,0], right = [3,2];
    
    numbers.map(n => {
        switch(n){
            case 1 : case 4: case 7:
                answer += "L";
                left = [~~(n/3),0]
                break;
            case "*":
                answer += "L";
                left = [3,1]
                break;
            case 3: case 6: case 9:
                answer += "R";
                right = [n/3-1,2]
                break;
             case "#":
                answer += "R";
                right = [3,2]
                break;
            default:
                let touch = n ? [~~(n/3),1] : [3,1];
                const leftLen = Math.abs(left[0] - touch[0]) + Math.abs(left[1]  - touch[1])
                const rightLen = Math.abs(right[0] - touch[0] ) + Math.abs(right[1] - touch[1])
                if(leftLen < rightLen || (leftLen == rightLen && hand == "left")){
                    answer += "L";
                    left = touch;
                }else{
                    answer+="R";
                    right = touch;
                }
        }
    })
    return answer;
}