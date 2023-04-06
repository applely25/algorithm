function solution(str1, str2) {
    const check = new RegExp(str2);
    return check.test(str1)?1:2;
}