#include<stdio.h>
int main() {
    int a, b;
    int M = -1000000; int m = 1000000;
    scanf("%d", &b);
    for (int i = 0; i < b; i++) {
        scanf("%d", &a);
        if (M < a)
            M = a;
        if (m > a)
            m = a;
    }
    printf("%d %d", m, M);
}