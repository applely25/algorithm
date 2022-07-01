//90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F
#include<stdio.h>
int main(){
    int a;
    scanf("%d", &a);
    if(a>=90 && a<=100) printf("A");
    else if(a>=80 && a<=89) printf("B");
    else if(a>=70 && a<=79) printf("C");
    else if(a>=60 && a<=69) printf("D");
    else printf("F");
}