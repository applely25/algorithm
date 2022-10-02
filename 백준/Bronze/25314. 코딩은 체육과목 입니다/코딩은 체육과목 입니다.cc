#include<stdio.h>
int main() {
	int n;
	scanf("%d", &n);
	n /= 4;
	for (int i = 1; i <= n; i++)
		printf("long ");
	printf("int");
}