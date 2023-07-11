function solution(s) {
    let count0 = 0;
    let c = 0
    while(s !== "1"){
        c++;
        const sw = [...s].filter(v=> v=== '1');
        count0 += s.length - sw.length
        s = sw.length.toString(2)
    }
    return [c, count0]
}