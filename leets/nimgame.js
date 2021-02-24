// Dexter and Debra are playing a game. They have N containers each having one or more chocolates. Containers are numbered from 1 to N, where ith container has A[i] number of chocolates.

// The game goes like this. First player will choose a container and take one or more chocolates from it. Then, second player will choose a non-empty container and take one or more chocolates from it. And then they alternate turns. This process will continue, until one of the players is not able to take any chocolates (because no chocolates are left). One who is not able to take any chocolates loses the game. Note that player can choose only non-empty container.

// The game between Dexter and Debra has just started, and Dexter has got the first Chance. He wants to know the number of ways to make a first move such that under optimal play, the first player always wins.

// Input Format

// The first line contains an integer N, i.e., number of containers.
// The second line contains N integers, i.e., number of chocolates in each of the containers separated by a single space.

// Constraints

// 1 ≤ N ≤ 106
// 1 ≤ A[i] ≤ 109

// Output Format

// Print the number of ways to make the first move such that under optimal play, the first player always wins. If the first player cannot win under optimal play, print 0.
/*
 * Complete the chocolateInBox function below.
 */
function chocolateInBox(arr) {
    /*
     * Write your code here.
     */
    let n = arr.length;
    let xorArr = xorArray(arr, n);
    console.log(`xorArr : ${xorArr}`);
    // The player making the first move 
    // can't win the game no matter 
    // how optimally he plays 
    if (xorArr == 0)
        return -1;

    // Initialised with zero 
    let numberOfWays = 0;

    for (let i = 0; i < n; i++) {

        // requiredCoins is the number of coins 
        // the player making the move must leave 
        // in the current pile in order to play optimally 
        let requiredCoins = xorArr ^ arr[i];

        // If requiredCoins is less than the current 
        // amount of coins in the current pile 
        // then only the player can make an optimal move 
        if (requiredCoins < arr[i])
            numberOfWays++;
    }

    return numberOfWays;

}
function xorArray(arr, n) {
    let res = 0;
    for (let i = 0; i < n; i++) {
        console.log(`XOR : res : ${res} arr[i] : ${arr[i]}`);
        res = res ^ arr[i];
        console.log(`XOR : res : ${res}`);
    }
    return res;
}

// chocolateInBox([2, 3]);
chocolateInBox([5, 5]);