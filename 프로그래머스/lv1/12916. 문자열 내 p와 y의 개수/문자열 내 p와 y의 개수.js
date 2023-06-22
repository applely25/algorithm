function solution(s){
    s = s.toLowerCase();
    let p = s.length - s.replace(/p/g,"").length;
    let y = s.length - s.replace(/y/g,"").length;
    
    return p === y ? true : false;
}