#include<stdio.h>
int GDB(int A, int B);
int LCM(int A, int B);

int main() {
	int A, B;
	scanf("%d %d", &A, &B);

	printf("%d\n", GDB(A, B));
	printf("%d\n", LCM(A, B));
	return 0;
}

int GDB(int A, int B) {
	int M = A > B ? A : B;
	int num = 1;
	for (int i = 1; i <= M; i++) {
		if (A % i == 0 && B % i == 0)
			num = i;
	}
	return num;
}

int LCM(int A, int B) {
	int M = A > B ? A : B, i;
	for (i = M; ; i++) {
		if (i % A == 0 && i % B == 0)
			return i;
	}
}