#include<stdio.h>
int main(){
    char a[20];
    //Hello World!
    a[0] = 'H';
    a[1] = 'e';
    a[2] = 'l';
    a[3] = 'l';
    a[4] = 'o';
    a[5] = ' ';
    a[6] = 'W';
    a[7] = 'o';
    a[8] = 'r';
    a[9] = 'l';
    a[10] = 'd';
    a[11] = '!';
    for(int i = 0; i<12; i++)
        printf("%c", a[i]);
}