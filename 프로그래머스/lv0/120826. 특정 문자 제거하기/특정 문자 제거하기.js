function solution(my_string, letter) {
    const search = new RegExp(letter, "g");
    return my_string.replace(search,"");
}