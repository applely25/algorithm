#include<stdio.h>
int main(){
    int sum = 0;
    int a;
    for(int i = 1; i<=5; i++){
        scanf("%d", &a);
        sum += a;
    }
    printf("%d", sum);
}