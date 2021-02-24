// function minRope(arr) {
// return arr.sort((a, b) => a - b).reduce((acc, n, i) => {
//     if (i == 0) { acc.prev = n; console.log(acc); return acc; };
//     const sum = acc.prev + n;
//     acc.prev = sum;
//     acc.total += sum;
//     console.log(acc);
//     return acc;

// }, { prev: 0, total: 0 }).total;
// }
// console.log(minRope([8, 4, 6, 12]));
// // [8, 4, 6, 12]
/**Just uncomment below code */
const sortArray = (list) => {
    return list.sort((a, b) => a - b).reduce((ObjectMap, n, i) => {
        // console.log(`ObjectMap pre : ${JSON.stringify(ObjectMap)} n : ${n} i :  ${i} current list after reduce : ${list}`);
        if (i == 0) { ObjectMap.previous = n; return ObjectMap; }; // 2
        const sumv2 = ObjectMap.previous + n;
        ObjectMap.previous = sumv2; // 2 6
        ObjectMap.total += sumv2; // 
        // console.log(`ObjectMap last ** : ${JSON.stringify(ObjectMap)} n : ${n} i :  ${i} current list after reduce : ${list}`);
        return ObjectMap;
    }, { previous: 0, total: 0 }).total
}

// console.log(`Mininum Cost :  ${sortArray([8, 4, 6, 12])}`);
console.log(`Mininum Cost :  ${sortArray([20, 4, 8, 2])}`);

console.log(` +Infinity : ${Infinity}  -Infinity : ${-Infinity}`);