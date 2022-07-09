#include <stdio.h>

int f(int x){
	int ans = 0;
	for(int i=x;i;i/=10)
		ans = ans*10 + i%10;
	return ans;
}

int main(){
	int a,b;
	scanf("%d %d",&a,&b);
	a = f(a);
	b = f(b);
	if(a>b) {
        printf("%d\n",a);
    }
	else {
        printf("%d\n",b);
    }
	return 0;
}