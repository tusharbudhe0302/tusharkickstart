function check_if_sum_possible(arr, k) {
	const helper = (a, target, n = a.length, position = 0, sum = 0, size = 0) => {
		if (target === sum) {
			if (size > 0) return true;
		}
		if (position === n) return false;
		return helper(a, target, n, position + 1, sum, size) || helper(a, target, n, position + 1, sum + a[position], size + 1);
	}
	return helper(arr, k);
}
console.log(check_if_sum_possible([2,4,8],6));