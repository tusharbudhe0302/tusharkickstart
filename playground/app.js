var checkPowersOfThree = function(n) {
    let pSet = new Set();
    if(n == 1) return true;
    while(n > 0) {
        let l = Math.floor(Math.log(n) / Math.log(3)); 
        if(l == 0 && n > 0) {
            return false;
        } else {
            if(pSet.has(l)) {
                return false;
            }
            pSet.add(l);
            n = n - Math.pow(3, l);
            
            if(n == 0 || n == 1) {
                return true;
            }
        }
    }
    
    return n == 0;
};
console.log(checkPowersOfThree(12));