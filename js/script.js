let myArray = ['strawberry kemo', 'jackfruit', 'lemon', 'orange', 'watermelon'];

//printing array length
console.log(myArray.length);

//pushing element at the back

myArray.push('pineapple');
console.log(myArray);

//poping element from the back

myArray.pop();
console.log(myArray);

//adding elemnet at the front
myArray.unshift('jam');
console.log(myArray);

//poping elemnet from the front
myArray.shift();
console.log(myArray)

//splice method delete elemnet from index and also replace the element
myArray.splice(1, 0, 'halwa', 'kaju barfi');
console.log(myArray)

//slice method instaed of modifying element in-palace  it copy the array .This is made of starting index and ending index where ending index is not included and ending index  must be greater then starting index
console.log(myArray.slice(2, 4));

//splice and slice both allowed negative index
myArray.splice(-2, 1, 'mango');
console.log(myArray);
console.log(myArray.slice(-2));

//concat is basically adding multiple arrays
let stu1 = [1, 2, 3, 4, 5];
let teac1 = [4, 5, 6, 7, 8];
let admin=[9,10,11]

let total = stu1.concat(teac1,admin);
console.log(total);
