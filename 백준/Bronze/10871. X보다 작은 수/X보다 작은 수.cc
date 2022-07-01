#include<stdio.h>
int main(){
    int a,b;
    scanf("%d %d", &a, &b);
    for(int i = 1; i<=a; i++){
        int n;
        scanf("%d", &n);
        if(b>n)
            printf("%d ",n);
    }
}