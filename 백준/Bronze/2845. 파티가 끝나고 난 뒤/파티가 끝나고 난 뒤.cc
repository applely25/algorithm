#include<stdio.h>
int main(){
    int a,b,c;
    scanf("%d %d", &a, &b);
    a *= b;
    for(int i = 1; i<=5; i++)
    {
        scanf("%d", &c);
        printf("%d ", c-a);
    }
}