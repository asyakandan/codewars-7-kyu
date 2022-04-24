/* An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.
You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.
Return that number, or -1 if it is impossible. */



function solve(n) {
	let banknotes = [500, 200, 100, 50, 20, 10];
	let result = 0;
	let i = 0;

	if (n % 10 || n == 0) {
		return result = -1;
	}

	while (n) {
		if (n >= banknotes[i]) {
			result += Math.floor(n / banknotes[i]);
		}
		n -= banknotes[i] * Math.floor(n / banknotes[i]);
		i++;
	}

	return result;
}