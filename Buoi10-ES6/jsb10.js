//Cac gia tri falsy: undefined, null, false, 0 ,-0, 0n, Nan, ""
//Toán tử ba ngôi

// let n
// let number = n > 5 ? 10 : -10;
// console.log(number)

// Nullish operator
// let n= null;
// // let number = n ? n : 20;
// let number1 = n || 20
// let number2 = n ?? 20 //n co gia tri la null/undefined thi
// //se lay gia tri sau, con caca gia tri falsy con lai thi se lay
// console.log('number1:' + number1)
// console.log('number2:'+ number2)

//Arrow function
// const sum = (a, b) => a + b
// console.log(sum(3, 4))

// const sum = (a,b,c,d,e) => ({sum: a +b +c+ d+ e})
// console.log(sum(1, 2, 5, 8, 3))

// const sum1 = (a, b) => ({ sum1: a + b })
// console.log(sum1(1, -4))

// const sum2 = (a, b, c, d) => ({ sum: a + b + c + d })
// console.log(sum2(10,20,70,90))


//Rest Operator, trong 1 function chi co 1 Rest Operator,
//phai nam o vi tri cuoi cung, dung trong ham ma k ro co bao nhieu gia tri
//chuyen vao
// const sum = (...listNumber)=>{
//     let sumnumber = 0;
//     for (let number of listNumber) {
//         sumnumber += number;
//     }
//     console.log(sumnumber)
// }
// sum(3,4)

//Spread Operator: co the dung duoc nhieu lan
// const listNumber = [1, 2, 3];
// const listNumber2 = [...listNumber];
// listNumber[0] = 10;
// console.log(listNumber)
// console.log(...listNumber2)

// const student1 = {
//     age: 15,
// }
// const student2 = { ...student1, name: 'Tran Thi B', age: 16 }
// student1.name = 'Nguyen Van A'
// console.log(student1)
// console.log(student2)

//Template String
// let birthday = '27/11/2001'

// const str = `Ban A sinh nhay ngay ${birthday} \nyeah yeah`
// console.log(str)

// const student = {
//     age: 20,
//     name: 'Tran thi B'
// }

// // const { age, name } = student;
// // console.log(age) //Thay doi gia tri khong bi anh huong,
// //La bi bien rieng biet lay gia tri cua object
// const { age: tuoi, name, level = 1 } = student;
// console.log(level)
//Voi mang thay {} => []

// const numbers = [1, 2, 3, 4]
// const [,,number] = numbers //Lay gia thu 3 cua mang
// const [...numberlist] = number;
// console.log(numberlist)

//Swap
// const number1 = [1, 2];
// const [numberA, numberB] = number1
// console.log(numberA)
// console.log(numberB)
// const number2 = [numberB, numberA]
// console.log(number2)

// const student = {
//     age: 35,
//     name: 'Tran thi b'
// }

// console.log(Object.keys(student))
// console.log(Object.values(student))