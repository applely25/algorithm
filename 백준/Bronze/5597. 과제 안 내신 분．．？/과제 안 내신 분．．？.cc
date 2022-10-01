#include <stdio.h>
int main()
{
    int n,num[30]={0};
    for(int i=0;i<28;i++)
    {
        scanf("%d",&n);
        num[n-1]=1;
    }
    for(int i=0;i<30;i++)
        if(num[i]!=1)
            printf("%d\n",i+1);
    return 0;
}