const map = {};
let counter = 0;
const digits = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
const encode = (ip) => {
	// counter++;

	let digitlst = [];
	let carryOver = ip.length;
	let quotient = 0;
	let remainder = 0;
	while (carryOver >= 64) {
		quotient = carryOver / 64;
		remainder = carryOver % 64;
		digitlst.push(remainder);
		carryOver = quotient;
		if (carryOver > 0) {
			digitlst.push(digitlst[carryOver]);
		}
		digitlst.reverse();
		let shortUrl = "".join(digitlst);
		map[shortUrl] = ip;
		return "http://bit-ly/" + shortUrl;
	}

}
console.log(encode("https://github.com/agnoster/base32-js/blob/master/lib/base32.js"));