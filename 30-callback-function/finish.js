/** ЗАДАЧА 30 - Колбэк функция
 *
 * 1. Что будет выведено в консоль?
 * Постарайтесь ответить без запуска кода.
 *
 * 2. Нужно ли как-то исправить этот код?
 */

//1
// setTimeout(function myFn() { // неправильный вариант
//   console.log('Привет из функции myFn')
// }, 2000)
//
// myFn()



// 2
setTimeout(function () {// Function Expression
  console.log('Привет из функции myFn')
}, 2000)


//3
setTimeout(() => console.log('Прошло 5000 милисекунд'), 5000)


// 1. В консоль будет выведенно сообщение - myFn() не опреденена
// 2. В setTimeout в колбэк следует передать анонимное функциональное выражение (Function Expression).
// 3. Можно использовать синтаксис стрелочной функции.
