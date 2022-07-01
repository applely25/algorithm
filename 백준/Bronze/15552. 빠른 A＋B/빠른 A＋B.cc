#include<stdio.h>
int main(){
    int a;
    scanf("%d", &a);
    for(int i = 1; i<=a; i++){
        int q,w;
        scanf("%d %d",&q, &w);
        printf("%d\n", q+w);
    }
}