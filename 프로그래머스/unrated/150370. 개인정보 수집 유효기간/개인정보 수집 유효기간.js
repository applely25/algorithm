function solution(today, terms, privacies) {
    let termsTable = {};
    let result = [];
    terms.map(d=> {
        d = d.split(" ");
        termsTable[d[0]] = Number(d[1])*28
    });
    
    today = today.split(".").map(n=>Number(n))
    today = (today[0]-2000) * 336 + today[1]*28 + today[2];
    privacies.map((d,i)=>{
        d = d.split(" ");
        let remainDay = d[0].split(".").map(n=>Number(n));
        remainDay = (remainDay[0]-2000) * 336 + remainDay[1]*28 + remainDay[2]
        if(today - remainDay >= termsTable[d[1]]) result.push(i+1)
    })
    return result
}