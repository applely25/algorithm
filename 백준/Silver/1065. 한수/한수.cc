#include <stdio.h>
int a(int n) {
    int i, cnt = 0, h, t, o;
    if (n < 100)
        return n;
    else {
        for (i = 100; i <= n; i++) {
            h = i / 100;
            t = (i % 100) / 10;
            o = (i % 100) % 10;
            if ((h - t) == (t - o))
                cnt++;
        }
        return (99 + cnt);
    }
}

int main() {
    int in, res;
    scanf("%d", &in);
    res = a(in);
    printf("%d", res);
}