
//Dung for thay while
// for (; true;){
//     if (condition)
//         break;
// }


//Cach khoi tao Array
//Cách 1
let arr = [1,2,3,'a', 'abc', [1,5,6]]; // mảng rỗng
let arr1 = [1,3, 5, 6, 8,60,50,40];
// let kq = Array.isArray(arr)
// console.log(arr)
//Cách 2
// let arr3 = new Array(1, 2, 3);
// console.log(arr3)

//Lấy giá trị của phần từ ở vị trí index = 0 trong mảng
// console.log(arr[0]);
// //Thay đối phần từ của mảng
// arr[0] = 'xyz';

// //Kiểm tra ddooj dài của mảng
// console.log(arr.length)

//Duyệt từng phần tử của mảng
// for (let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i])
// }

//EX
// for (let i = 0; i < arr1.length; i++){
//     if (i % 3 ==0 ) {
//         continue;
//     }
//     console.log(arr1[i])
// }
// console.log(arr1[0])
// console.log(arr1[3])
// console.log(arr1[1] + arr1[2])

// let temp = arr1[1];
// arr1[1] = arr1[3];
// arr1[3] = temp;
// console.log(arr1)

// for (let number of arr1) {
//     console.log(number)
// }

// for (let number of arr1) {
//     if (number % 2 == 0)
//     {
//         console.log(number)
//         }
// }

// let sum = 0;
// for (let number1 of arr1) {
//     sum += number1;
// }
// console.log(sum)

// let min = arr1[0]
// for (i = 0; i < arr1.length; i++){
//     if (arr1[i] < min) {
//         min = arr1[i]
//     }
// }

// console.log(min)

//Thêm/Xóa phần tử vào mảng

//Thêm vào cuối mảng
// arr1.push(100, 220)
// console.log(arr1)
// //Thêm vào đầu mảng
// arr1.unshift(200);
// console.log(arr1)

// //Xóa phần tử cuôi mảng
// arr1.pop()
// console.log(arr1)
// //Xóa phần tử đầu mảng
// arr1.shift
// console.log(arr1)

// //Dùng splice để xóa phần tử
// arr1.splice(2, 1)
// console.log(arr1)
// //Dùng splice để thêm phần tử
// arr1.splice(2, 0, 10)
// console.log(arr1)
// //Dùng splice để update
// arr1.splice(2, 1, 30)
// console.log(arr1)

//Tinh tich
// let result = 1;
// for (let number of arr1) {
//     result *= number
// }
// console.log(result)

// let arr2 =[]
// for (let number of arr1) {
//     if (number % 2 == 0) {
//         arr2.push(number);
//     }
// }

// let min = arr2[0]
// for (i = 0; i < arr2.length; i++){
//     if (arr2[i] < min) {
//         min = arr2[i]
//     }
// }
// console.log(min)

// let arr3 = []
// for (let number of arr1) {
//     if (number % 3 == 0)
//     {
//         arr3.push(number)
//         }
// }

// let max = arr3[0];
// for (i = 0; i < arr3.length; i++)
// {
//     if (arr3[i] > max)
//         max = arr3[i]
//     }
// console.log(max)

//Tinh TBC
// let sum = 0;
// for (let number of arr1) {
//     sum += number;
// }
// let tbc = sum / arr1.length;
// console.log(sum);
// console.log(tbc)


// let isExist = true;
// for (let number of arr1)
// {
//     if (number >= 20) {
//         isExist = false;
//         break;
//     }
// }

// if (isExist === true) {
//     console.log("Khong co so nao lon hon 20")
// } else {
//     console.log("Trong mang co phan tu lon hon 20")
// }

// console.log(arr1.includes(-10));
// let n;
// do {
// 	n = Number(prompt('Mời bạn nhập n:'));
// } while (arr1.includes(n) === false);


// for (let number of arr1) {
//     let count =0
//     for (let i = 1; i <= number; i++)
//     {
//         if (number % i == 0) {
//             count++;
//         }
//     }

//     if (count === 2) {
//         console.log(number, "la so nguyen to")
//     } else {
//         console.log(number, "khong phai la so nguyen to")
//     }
// }

// let sum =0;
// for (let number of arr1) {
// 	if (number % 2 != 0)
// 	{
// 		sum += number
// 	}
// }
// console.log(sum)

for (let number of arr1) {
	if (number > 5 && number % 2 == 0) {
		console.log(number)
		break;
	}
}

let x = [];
for (let number of arr1) {
	number = number ** 2;
	x.push(number);
}
console.log(x)