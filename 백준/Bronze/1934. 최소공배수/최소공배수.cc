#include<stdio.h>
int LCM(int A, int B);
int GCD(int A, int B);

int main()
{
	int A, B, TC;
	scanf("%d", &TC);
	while (TC--)
	{
		scanf("%d	%d", &A, &B);
		printf("%d\n", LCM(A, B));
	}
	return 0;
}

int GCD(int a, int b) {
	int n;

	while (b != 0) {
		n = a % b;
		a = b;
		b = n;
	}

	return a;
}

int LCM(int a, int b) {
	return a * b / GCD(a, b);
}