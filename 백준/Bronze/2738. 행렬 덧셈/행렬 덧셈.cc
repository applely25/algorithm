#include<stdio.h>
int main() {
	int a[2][100][100];
	int b[100][100];
	int n, m;
	scanf("%d %d", &n, &m);
	for (int k = 0; k < 2; k++) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {
				scanf("%d", &a[k][i][j]);
			}
		}
	}

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			printf("%d " , a[0][i][j] + a[1][i][j]);
		}
		printf("\n");
	}

}