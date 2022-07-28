#include <stdio.h>
int main() {
	char s[100];
	scanf("%s", &s);
	int arr[26];
	for (int i = 0; i < 26; i++) {
		arr[i] = -1;
	}
	int n = s[0] - 97;
	arr[n] = 0;

	for (int i = 1; s[i] != '\0'; i++) {
		if (arr[s[i] - 97] == -1) {
			arr[s[i] - 97] = i;
		}
	}
	for (int i = 0; i < 26; i++) {
		printf("%d ", arr[i]);
	}
}