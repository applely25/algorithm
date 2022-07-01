#include<stdio.h>
int main() {
	int M = 0, a, arr[1000];
	double sum = 0;
	scanf("%d", &a);
	for (int i = 0; i < a; i++) {
		scanf("%d", &arr[i]);
		if (M < arr[i])
			M = arr[i];
	}
	for (int i = 0; i < a; i++) {
		sum += (double)arr[i] / M * 100;
	}
	printf("%lf", (double)sum/a);
}