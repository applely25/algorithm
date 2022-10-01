#include<stdio.h>
#include<string.h>
int main() {
	char s[100];
	scanf("%s", s);
	for (int i = 0; i < strlen(s); i++) {
		if (s[i] >= 65 && s[i] <= 90)
			s[i] += 32;
		else if (s[i] >= 97 && s[i] <= 122)
			s[i] -= 32;
	}
	for (int i = 0; i < strlen(s); i++) {
		printf("%c", s[i]);
	}
}