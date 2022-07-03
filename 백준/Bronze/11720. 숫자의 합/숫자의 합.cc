#include<stdio.h>
int main() {
	int a, arr[100], sum = 0;
	scanf("%d", &a);
	for(int i = 0; i<a; i++)
		scanf("%1d", &arr[i]);

	for (int i = 0; i < a; i++) {
		sum += arr[i];
	}
	printf("%d", sum);
}