#include<stdio.h>
int main() {
    int a, b, c, s;
    scanf("%d %d %d", &a, &b, &c);
    if (c - b == 0) printf("-1");
    else {
        s = a / (c - b) + 1;
        if (s < 0) {
            printf("-1");
        }
        else printf("%d", s);
    }
}