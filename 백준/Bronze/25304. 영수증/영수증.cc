#include <stdio.h>
int main() {
	int m,n;
	scanf("%d %d", &m, &n);
	int money, many;

	for (int i = 1; i <= n; i++) {
		scanf("%d %d", &money, &many);
		m -= (money * many);
	}
	if (m == 0) printf("Yes");
	else printf("No");
}