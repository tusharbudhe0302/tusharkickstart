const unboundedKnapsack1D = (values, weights, n, target) => {
    // create a lookup table
    // lookup[i] is going to store maximum value
    // with knapsack capacity i.
    const lookup = new Array(target + 1).fill(0);
    // fill lookup[] using above recursive formula
    for (let i = 0; i <= target; i++) {
        for (let j = 0; j < n; j++) {
            if (weights[j] <= i) {
                let debug = lookup[i - weights[j]] + values[j];
                lookup[i] = Math.max(lookup[i], debug);
            }
        }
    }
    //return the max
    return lookup[target];
}

const values = [1, 5, 8, 9];
const weights = [1, 2, 3, 4];
const target = 5;
console.log(unboundedKnapsack1D(values, weights, values.length - 1, target)); //16