function solution(dartResult) {
    let num = [], loc = [], bounus = []; // num == dartResult 숫자, loc == D/S/T, bounus == */#
    const scoreBoard = {S:1, D:2, T:3};
    dartResult.split("").map((d,i)=>{ //map 돌면서 알맞은 배열에 저장
        if(d === "S" || d === "D" || d === "T"){
            loc.push(scoreBoard[d])
        }
        else if(d === "*" || d === "#"){ // bounus는 어디에 적용시켜야하는지 위치와 함께 저장
            bounus.push([num.length, d])
        }else{
            if(d === "0" && i !==0){ //숫자가 10인경우 처리
                const popN = num.pop();
                if(popN === 1) d = "10" // 1,0이면 pop해서 10 push
                else num.push(popN) // 10이 아니면, pop한 값 다시 push하고 원래 현재 값 push
            }
            num.push(Number(d))
        }
    })
    console.log(num)
    num = num.map((n,i)=>Math.pow(n, loc[i])); //num과 loc이용해서 제곱해주기
    
    bounus = bounus.map((v,i)=>{ //bonus 점수 계산
        if(v[1] === "#"){ //#일 경우, 현재 점수 *-1
            num[v[0]-1] *= -1
        }else{ // *일 경우, 현재 점수와 이전 점수 *2 
            num[v[0]-1] *= 2
            num[v[0]-2] *= 2
        }
    })

    return num.reduce((acc, v) => acc+v, 0 )

}