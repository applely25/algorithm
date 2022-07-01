#include<stdio.h>
int main() {
	int a;
	int max = 0, i = 0, cnt;
	for (; i < 9; i++) {
		scanf("%d", &a);
		if (max < a) {
			max = a;
			cnt = i + 1;
		}
	}
	printf("%d\n%d", max, cnt);
}