#include <stdio.h>

int main() {
	int n;
	scanf("%d", &n);

	int c = 1;
	while (1) {
		if (n < c)
			break;
		c *= 2;
	}
	c /= 2;
	if (c == n) printf("%d", n);
	else printf("%d", (n - c) * 2);
}