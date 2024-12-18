/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

// Создайте функцию здесь

const result = mult(objectWithNumbers)
console.log(result)
// 300


function mult(obj) {
  const { x, y, z } = obj; // Деструктурируем свойства сразу из obj
  return x * y * z; // Возвращаем произведение
}