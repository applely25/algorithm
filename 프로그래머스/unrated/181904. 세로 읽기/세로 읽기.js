const solution = (my_string, m, c) =>
    [...my_string].filter((_,i)=> !((i-c+1)%m)).join("")
