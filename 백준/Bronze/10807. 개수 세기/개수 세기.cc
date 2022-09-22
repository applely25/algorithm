#include<stdio.h>
int main() {
	int n,c,count = 0;
	int arr[100];
	scanf("%d", &n);
	for (int i = 0; i < n; i++) {
		scanf("%d", &arr[i]);
	}
	scanf("%d", &c);
	for (int i = 0; i < n; i++) {
		if (arr[i] == c)
			count++;
	}
	printf("%d", count);
}