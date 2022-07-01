#include<stdio.h>
int main(){
    int h,m,p;
    scanf("%d %d", &h, &m);
    scanf("%d", &p);
    h+=p/60;
    m+=p%60;
    if(m>=60)
    {
        h += m/60;
        m -= 60 * (m/60);
    }
     if(h>=24)
        h -= 24;
    printf("%d %d", h,m);
}