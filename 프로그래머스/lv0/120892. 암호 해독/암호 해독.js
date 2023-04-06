function solution(cipher, code) {
    return cipher.split("").filter((v,i)=> i%code == code-1).join("");
}