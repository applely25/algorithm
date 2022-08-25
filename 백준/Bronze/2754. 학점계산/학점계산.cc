#include <stdio.h>

int main(void)
{
	char str[3];
	double score = 4.0;
	scanf("%s", str);

	if (str[0] == 'F'){
		printf("0.0\n");
		return 0;
    }
	score -= str[0] - 'A';
	if (str[1] == '+')
		score += 0.3;
	if (str[1] == '-')
		score -= 0.3;
	printf("%.1lf", score);
}