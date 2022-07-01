#include<stdio.h>
int main() {
	int a;
	scanf("%d", &a);
	int cnt = 0;
	int n1, n2;
	int b = a;
	do
	{
		n1 = b % 10;
		n2 = (b / 10 + b % 10) % 10;
		b = n1 * 10 + n2;
		cnt++;
	} while (a != b);
	
	printf("%d", cnt);
}