const edd_drop_dp = (n, k) => {
    if (k <= 1) return k;
    if (n === 1) return k;
    let min = Number.MAX_VALUE;
    let res;
    for (let x = 1; x <= k; x++) {
        res = 1 + Math.max(edd_drop_dp(n - 1, x - 1), edd_drop_dp(n, k - x));
        if (res < min) {
            min = res;
        }
    }
    return min;
}

const edd_drop_dp_table = (n, k) => {
    /* A 2D table where entry eggFloor[i][j]
 will represent minimum number of trials
needed for i eggs and j floors. */
    let eggFloor = new Array(n + 1);
    for (let i = 0; i < (n + 1); i++) {
        eggFloor[i] = new Array(k + 1);
    }
    let res;
    let i, j, x;

    // We need one trial for one floor and
    // 0 trials for 0 floors
    for (i = 1; i <= n; i++) {
        eggFloor[i][1] = 1;
        eggFloor[i][0] = 0;
    }

    // We always need j trials for one egg
    // and j floors.
    for (j = 1; j <= k; j++)
        eggFloor[1][j] = j;

    // Fill rest of the entries in table using
    // optimal substructure property
    for (i = 2; i <= n; i++) {
        for (j = 2; j <= k; j++) {
            eggFloor[i][j] = Number.MAX_VALUE;
            for (x = 1; x <= j; x++) {
                res = 1 + Math.max(
                    eggFloor[i - 1][x - 1],
                    eggFloor[i][j - x]);
                if (res < eggFloor[i][j])
                    eggFloor[i][j] = res;
            }
        }
    }
    // eggFloor[n][k] holds the result
    return eggFloor[n][k];
}
console.log(edd_drop_dp_table(3, 3)); //2