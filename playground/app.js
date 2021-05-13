function minimum_window(s, t) {
	// Write your code here

	let tL = t.length;
	let sL = s.length;
	let mapForT = {};
	let mapForS = {};
	let minLength = sL + 1;
	let currentChar = '';
	for (currentChar of t) {
		if (!mapForT.hasOwnProperty(currentChar))
			mapForT[currentChar] = 0;
		else
			mapForT[currentChar] = mapForT[currentChar] + 1;
	}
	let start = 0;
	let count = 0;
	let left = 0;
	let leftChar ='';
	for (let i = 0; i < sL; i++) {
		currentChar = s[i];
		if (!mapForS.hasOwnProperty(currentChar)) mapForS[currentChar] = 0;
		else mapForS[currentChar] += 1;
		if (mapForS.hasOwnProperty(currentChar) && mapForT.hasOwnProperty(currentChar) && mapForS[currentChar] <= mapForT[currentChar]) {
			count++;
		}
		if (count === tL) {
		leftChar = s[left];
			while (!mapForT.hasOwnProperty(leftChar) || mapForS[leftChar] > mapForT[leftChar]) {
				if (mapForS[leftChar] > mapForT[leftChar]) {
					mapForS[leftChar]--;
				}
				left++;
			}
			if (i - left + 1 < minLength) {
				minLength = i - left + 1;
				start = left;
			}
		}
	}
	return minLength === sL + 1 ? -1 : s.substr(start, minLength);
}


function minimum_windowII(s, t) {
	const freq1 = {},
		freq2 = {},
		n = s.length,
		m = t.length;

	for (let ch of t) {
		freq1[ch] = (freq1[ch] || 0) + 1;
	}

	let minLen = n + 1,
		start = 0;
	let l = 0,
		count = 0,
		ch;
	for (let r = 0; r < n; r++) {
		ch = s[r];
		freq2[ch] = (freq2[ch] || 0) + 1;
		if (freq1[ch] && freq2[ch] <= freq1[ch]) count++;
		if (count === m) {
			while (!freq1[s[l]] || freq2[s[l]] > freq1[s[l]]) {
				if (freq2[s[l]] > freq1[s[l]]) freq2[s[l]]--;
				l++;
			}
			if (r - l + 1 < minLen) {
				minLen = r - l + 1;
				start = l;
			}
		}
	}

	return minLen === n + 1 ? -1 : s.substr(start, minLen);
}
console.log(minimum_window("BACRDESDFBAER", "BAR")); //BACR Not BEAR BACR come first
console.log(minimum_window("AYZABOBECODXBANC", "ABC"));



// Output: 