// Напишите функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и 
// возвращает сумму этих двух чисел. Выведите в консоль результат.

function getfirstFunc(a) {
    
    return function secondFunc(b) {
      return a + b;
    }
 
 };
 
 
 let resultFirstFunc = getfirstFunc(2);
 
 
 let resultFunc = resultFirstFunc(4); 
 
 console.log(resultFunc);