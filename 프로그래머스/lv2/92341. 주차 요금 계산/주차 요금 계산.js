let car = {}
function solution(fees, records) {
    for (let i of records){
        const carSplit = i.split(" ");
        let time = carSplit[0].split(":");
        time = Number(time[0]) * 60 + Number(time[1])
        
        if(carSplit[2] === "IN"){
            let nowTime = 0;
            if(car[carSplit[1]]) nowTime = car[carSplit[1]].time
            car[carSplit[1]] = {
                time : nowTime - time,
                state: "IN"
            }
        }else{
            let nowTime = car[carSplit[1]].time
            car[carSplit[1]] = {
                time: nowTime + time,
                state: "OUT"
            }
        }
    }
    
    for (let i in car){
        if(car[i].state === "IN"){
            const nowTime = car[i].time;
            car[i].time = nowTime + 1439;
        }
    }
    
    car = Object.entries(car).sort((a,b) => Number(a[0])-Number(b[0]))
    let result = []
    car.map(d=>{
        let money = d[1].time - fees[0]
        if(money > 0){
            result.push(fees[1] + Math.ceil(money/fees[2])*fees[3])
        }else{
            result.push(fees[1])
        }
    })
    return result
}