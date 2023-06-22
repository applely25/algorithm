function solution(s){
    // s = s.toLowerCase();  ->  정규식에 i 붙이기 : 대소문자 구분 없이
    let p = s.length - s.replace(/p/gi,"").length;
    let y = s.length - s.replace(/y/gi,"").length;
    
    return p === y ? true : false;
}