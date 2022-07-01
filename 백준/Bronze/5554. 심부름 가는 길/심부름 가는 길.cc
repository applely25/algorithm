#include<stdio.h>
int main(){
    int sum = 0;
    int t;
    for(int i = 1; i<=4; i++){
        scanf("%d", &t);
        sum += t;
    }
    printf("%d\n%d",sum/60, sum%60);
}