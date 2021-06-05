// const result = [];
const minCoinsChange = (coins, k) => {
	let table = new Array(k + 1).fill(null);
	table[0] = 0;
	for (let i = 1; i <= k; i++) {
		for (let coin of coins) {
			if (i - coin >= 0) {

			}
		}
	}


};
console.log(minCoinsChange([1, 2, 5], 11)); // 3
// Possible Combinations