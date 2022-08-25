#include<stdio.h>
int main(){
    long long a,b, n;
    scanf("%lld %lld", &a, &b);
    n = a-b;
    if(n <0) n*= -1;
    printf("%lld", n);
}