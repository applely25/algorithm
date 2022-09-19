#include<stdio.h>
int main() {
	int arr[8];
	int k;
	for (int i = 0; i < 8; i++)
		scanf("%d", &arr[i]);

	if (arr[0] == 1) {
		k = 1;
		for (int j = 2; j < 8; j++) {
			if (arr[k] != j) {
				break;
			}
			k++;

			if (k == 7) {
				printf("ascending");
				return 0;
			}
		}
	}
	else if (arr[7] == 1) {
		k = 6;
		for (int j = 2; j <8; j++) {
			if (arr[k] != j)
				break;
			k--;
		}
		if (k == 0) {
			printf("descending");
			return 0;
		}
	}
	else {

		printf("mixed");
		return 0;
	}
	printf("mixed");
}