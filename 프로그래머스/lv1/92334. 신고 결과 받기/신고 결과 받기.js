function solution(id_list, report, k) {
    let reportUser = {}, stopUser = [], mail = [];
    id_list.map(user => {
        reportUser[user] = [];
        mail.push(0);
    });
    report.map((data)=>{
        let user = data.split(" ");
        if(!reportUser[user[1]].includes(user[0])){
            reportUser[user[1]].push(user[0])
        }
    })
    for(let i in reportUser){
        if(reportUser[i].length >= k){
            stopUser.push(i);
            reportUser[i].map(user => mail[id_list.indexOf(user)]++ )
        }
    }
    return mail
}