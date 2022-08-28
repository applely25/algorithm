#include<stdio.h>
int main() {
	int l, a, b, c, d;
	scanf("%d %d %d %d %d", &l, &a, &b, &c, &d);
	int c1,c2;
	if (a % c != 0) {
		c1 = a / c + 1;
	}
	else {
		c1 = a / c;
	}
	if (b % d != 0) {
		c2 = b / d + 1;
	}
	else {
		c2 = b / d;
	}

	if (c1 > c2) {
		printf("%d", l - c1);
	}
	else {
		printf("%d", l - c2);
	}

	

}