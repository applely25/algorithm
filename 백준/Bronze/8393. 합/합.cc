#include<stdio.h>
int main(){
    int sum = 0, a;
    scanf("%d", &a);
    for(int i = 1; i<=a; i++)
        sum += i;
    printf("%d", sum);
}