const solution = (my_string, overwrite_string, s) =>
    my_string.substr(0, s) + overwrite_string + my_string.substr(s+overwrite_string.length)

/*
substr(시작 인덱스, 길이) : 시작 인덱스부터 길이만큼 문자열을 가져옴
                            길이부분을 생략하면, 문자 끝부분까지 가져옴

1. 문자에 시작부분부터 인덱스 번호의 길이만큼 문자열 가져오기
2. overwrite 되는 문자열 가져오기
3. 나머지 overwrite 되지 않는 부분 문자열 가져오기
4. 다 더하기!
*/
