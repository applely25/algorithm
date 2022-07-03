#include<stdio.h>
int main() {
    int a, arr[10000],sum;
    scanf("%d", &a);
    for (int i = 0; i < a; i++) {
        int b, per = 0;
        double avg;
        scanf("%d", &b);
        sum = 0;
        for (int j = 0; j < b; j++) {
            scanf("%d", &arr[j]);
            sum += arr[j];
        }
         
        avg = sum/b;
        for (int j = 0; j < b; j++) {
            if (arr[j] > avg)
            {
                per++;
            }
        }
        printf("%.3lf%%\n", 100.0 / b * per);
    }
    return 0;
}