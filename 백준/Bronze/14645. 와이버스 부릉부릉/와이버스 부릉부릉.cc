#include<stdio.h>
int main(){
    int a[100][100];
    int n,m;
    scanf("%d %d", &n, &m);
    
    for(int i = 0; i<n; i++){
        for(int j = 0; j< m; j++){
            scanf("%d", &a[i][j]);
        }
    }
    printf("비와이");
}