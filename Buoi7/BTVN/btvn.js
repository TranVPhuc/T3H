//KIEM TRA SO NGUYEN TO
// let num = Number(prompt("Nhap so can kiem tra:"));
// if (num <= 1) {
//   console.log(num + " khong phai so nguyen to.");
// } else {
//   let isPrime = true;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(num + " la so nguyen to.");
//   } else {
//     console.log(num + " khong phai so nguyen to");
//   }
// }


//Nhập vào 3 số a, b, x (a < b).
//Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.
// let a = 50;
// let b = 20
// while (a > b) {
//     a = Number(prompt("Nhap so a: "))
//     b = Number(prompt("Nhap so b: "))
// }
// let x = Number(prompt("Nhap so x: "))

// for (i = a; i <= b; i++)
// {
//     if (i % x == 0)
//     {
//         console.log(i)
//         break;
//     }
// }


//Nhập vào số n. Hãy in ra số ước của n.
// let n = Number(prompt("Nhap so n: "))
// for (let i = 1; i <= n; i++)
// {
//     if (n % i == 0)
//     {
//         console.log(i);
//     }
// }


// Nhập vào chuỗi s (chỉ gồm chữ số) và số l.
//Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi
//s >= l.

// let s = prompt("Nhap mot chuoi s: ")
// let l = Number(prompt("Nhap mot so l: "))

// while (s.length < l)
// {
//     s += 'a';
// }
// console.log(s)


//Nhập vào 2 số m, n(m > 0, n > 0).
//Tìm ước chung lớn nhất của m, n.
//Tìm bội chung nhỏ nhất của m, n.
// let m = -10;
// let n = -10;
// while (m < 0 || n < 0) {
//     m = Number(prompt("Nhap so m: "))
//     n = Number(prompt("Nhap so n: "))
// }

// let ucln = 0;
// let bcnn = 0;

// for (let i = 1; i <= m && i <= n; i++) {
//   if (m % i === 0 && n % i === 0) {
//     ucln = i;
//   }
// }

// bcnn = (m * n) / ucln;

// console.log("Ước chung lớn nhất là: " + ucln);
// console.log("Bội chung nhỏ nhất là: " + bcnn);

//Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20.
//Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in ra “Đoán đúng”.
//Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer.
//Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.

// let correct = Math.floor(Math.random() * 20) + 1;
// let solanthu = 0;

// while (solanthu < 5) {
//     let answer = Number(prompt("Nhap so cua ban (tu 1 den 20): "))
//     if (answer === correct) {
//         console.log("Doan dung");
//         break;
//     }
//     else
//     {
//         console.log("Doan sai");
//         solanthu++;
//     }
// }

// if (solanthu == 5) {
//     console.log("Ban da thua, so dung la: " + correct)
// }

//Nhập vào số n (2 <= n <= 10).
//Hãy in ra bảng cửu chương của số n.
// let number = 1
// while (number < 2 || number > 10)
// {
//     number = Number(prompt("Nhap so can in: "))
// }
// for (let i = 1; i <= 10; i++){
//     let result = number * i
//     console.log(result)
// }

//Nhập vào số n (n >= 2).
//Hãy in ra màn hình hình vuông có độ dài cạnh = n.
// let n = 1;
// while (n < 2)
// {
//     n = Number(prompt("Nhap so n: "))
// }

//  for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= n; j++) {
//       row += '* ';
//     }
//     console.log(row);
//   }

//hập vào 2 số m, n (m >= 2, n > =2). 
//Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n.
// let m = 1;
// let n = 1;
// while (m < 2 || n < 2) {
//   m = Number(prompt("Nhap chieu rong (m >= 2):"));
//   n = Number(prompt("Nhap chieu dai (n >= 2):"));
// }
//   for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= m; j++) {
//       row += '* ';
//     }
//     console.log(row);
//   } 

//Nhập vào số n (n >= 3). 
//Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.
// let n = 1
// while (n < 3) {
//    n = Number(prompt("Nhap so n (n >= 3):"));
// } 

// for (let i = 1; i <= n; i++) {
//   let row = '';
//   for (let j = 1; j <= i; j++) {
//     row += '* ';
//   }
//   console.log(row);
// }