function solution(my_string, alp) {
    const regex = new RegExp(`${alp}`, 'g');
    return my_string.replace(regex, alp.toUpperCase())
}