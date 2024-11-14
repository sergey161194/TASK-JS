/** ЗАДАЧА 70 - Деструктуризация массивов и "rest" оператор
 *
 * Присвойте переменным "a", "b" и "с" значения, используя
 * деструктуризацию массивов и "rest" оператор
 *
 * Значения переменных должны быть такими как в выводах в консоли
 */
//
// const arr = [1, 2, 3, 4, 5, 6, 7]
//
// const [a, b, ...c] = arr
//
// console.log(a)
// // 1
//
// console.log(b)
// // 2
//
// console.log(c)
// // [3, 4, 5, 6, 7]


let storeOptions = {
    ...this.storeOptions,
    productionId: 3,
    applyFilter: false,
    plantId: 412424242424,
};


console.log(storeOptions)