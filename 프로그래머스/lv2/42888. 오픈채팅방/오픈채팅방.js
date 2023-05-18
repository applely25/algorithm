function solution(record) {
    let answer = [], system = [], user = {};
    
    record.map(d=>{ // record 배열을 반복
        const content = d.split(" "); // 명령어를 명령 유저아이디 닉네임으로 나누기
        if(content[0] == "Enter"){
            user[content[1]] = content[2]
            system.push([content[0], content[1]])
        }else if(content[0] == "Leave"){
            system.push( [content[0], content[1]] )
        }else{
            user[content[1]] = content[2]
        }
        
    })
    
    system.map(d=>{ //system 배열을 반복
        if(d[0] == "Enter"){ // enter인 경우 들어왔습니다. 출력
            answer.push(`${user[d[1]]}님이 들어왔습니다.`);
        }else{ // leave인 경우 나갔습니다. 출력
            answer.push(`${user[d[1]]}님이 나갔습니다.`);
        }
    })
    return answer;
}