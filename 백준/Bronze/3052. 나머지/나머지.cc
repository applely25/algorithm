#include<stdio.h>
int main() {
	int a, arr[42]= {0};
	for (int i = 1; i <= 10; i++) {
		scanf("%d", &a);
		arr[a % 42]++;
	}
	int cnt = 0;
	for (int i = 0; i <= 41; i++) {
		if (arr[i] != 0)
			cnt++;
	}
	printf("%d", cnt);

}