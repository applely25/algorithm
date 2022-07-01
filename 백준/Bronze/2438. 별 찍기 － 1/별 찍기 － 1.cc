#include<stdio.h>
int main(){
    int g;
    scanf("%d", &g);
    for(int i = 1; i<=g; i++){
        for(int j = 1; j<=i;j++)
            printf("*");
        printf("\n");
    }
}