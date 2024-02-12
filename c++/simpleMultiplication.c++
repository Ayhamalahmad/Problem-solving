#include <iostream>
using namespace std;
int simpleMultiplication(int number ) {
	if (number % 2 == 0) {
		return number * 8;
	}
	else {
		return number * 9;
	}
}
int main()
{

		cout << simpleMultiplication(8) << "\n";
		cout << simpleMultiplication(3) << "\n";

	return 0;
}