#include<stdio.h>
int main() {
	int x, y, w, h;
	scanf("%d %d %d %d", &x, &y, &w, &h);
	w -= x;  h -= y;

	if (x > w) x = w;
	if (y > h) y = h;

	if (x > y) printf("%d", y);
	else printf("%d", x);
}