#include<stdio.h>
int main() {
    int g;
    scanf("%d", &g);
    for (int i = 1; i <= g; i++) {
        for (int j = g; j > i; j--)
            printf(" ");
        for (int j = 1; j <= i; j++)
            printf("*");
        printf("\n");
    }
}