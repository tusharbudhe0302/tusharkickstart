const buildBadMatchPattern = (p) => {
	let badMatchObject = new Map();
	let max = 0;
	let pl = p.length;
	for (let i = 0; i < pl; i++) {
		max = (max, pl - i - 1); // logic to set 
		badMatchObject.set(p[i], max);
	}
	// badMatchObject.set('*', pl); // Even this don't need, Just keep for best practices.
	return badMatchObject;
}
const findBeginingIndexOfBoyreMoorePattern = (s, p) => {
	let sl = s.length;
	let pl = p.length;
	let numberOfShifts = 0;
	let badMatchMap = buildBadMatchPattern(p);
	let result = [];
	let i = 0;
	for (let i = 0 ; i <= sl;i+=numberOfShifts) {
		numberOfShifts = 0
		for (j = pl - 1; j >= 0; j--) {
			if (s[i] != p[j]) {
				if (badMatchMap.has(p[j])) {
					numberOfShifts = badMatchMap.get(p[j]);
					break;
				} else {
					numberOfShifts = pl;
					break;
				}
			}
		}
		if(	numberOfShifts === 0){
			console.log(i);
		}
		
	}

	return (!result.length) ? -1 : result;

}


findBeginingIndexOfBoyreMoorePattern("interfaces enforce consistent interfaces in derived classes", "interfaces");
//Pattern found On index: 0
// Pattern found On index: 27