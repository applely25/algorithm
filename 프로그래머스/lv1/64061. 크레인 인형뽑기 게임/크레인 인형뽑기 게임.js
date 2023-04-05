const len = (board, v)=> {
    let len = 0;
    for(let i = 0; i< board.length; i++){
        if(board[i][v-1]) len++;
    }
    return len; //  세로줄 데이터 개수
}

function solution(board, moves) {
    var answer = 0;
    let movesArr = [];
    moves.forEach(v => {
        const l = len(board, v)
        if(l != 0){
            let doll = board[board.length-l][v-1];
            if(doll == movesArr[movesArr.length -1]){
                movesArr.pop();
                answer+=2;
            }else{
                movesArr.push(doll);
            }
            board[board.length-l][v-1] = 0;
        }
    })
    return answer;
}
