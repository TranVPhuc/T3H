// alert("Day la vi du external")
// function showAlert(){
//             alert("Vi du internal")
//         }

//3 tu khoa khoi tao bien
//var
//let
//const

//1.var/let va const
//Tu khoa var dung de khai bao 1 bien va bien do co the thay
//doi gia tri
    // var a = 10;
    // console.log(a)
    // var a =10;
    // console.log(a)

    //let
    //Tu khoa var dung de khai bao 1 bien va bien do co the thay
    //doi gia tri
    // let b = 40;
    // console.log(b)
    // b = 'bon muoi';
    // console.log(b)

    //const
    //Tu khoa var dung de khai bao 1 bien va bien do khong 
    //the thay doi gia tri
    // const c = 100;
    // console.log(c)
    // c = 200;
    // console.log(c)

//Khi khoi tao bien bang tu khoa let,var thi khong nhat thiet
//phai gan luon gia tri

//Khi khoi tao bien bang tu khoa const thi phai gan luon
//gia tri khoi tao

//2.var va let/const (Nhom theo phien ban)
//var co co che hoisting

// console.log(a);
// const  a = 10;
// console.log(a)

//scope
//var: global scope
// {
//     var couse1 = "HTML";
//     var couse2 = "CSS";
//     var couse3 = "JS";

//     console.log(couse1)
//     console.log(couse2)
//     console.log(couse3)
// }


// var a = 10
// var b = '10'
// var d = 10
// var f = true
// var c = b * d - a
// var e = a && f
// console.log(a + d + b)

// var paragraph = "Day la doan van"
// var paragraph = 'Day la doan van'
// var paragraph = `Day la doan van`

// var sum = 0;
// for (var i = 1; i <= 50; i++){
//     sum += i;
// }
// console.log(sum)

// var sum = 0;
// for (let i = -10; i <= 50; i++)
// {
//     if (i % 2 == 0)
//     {
//         sum += i
//     }
//     console.log(sum)
// }

// for (let i = -100; i <= 100; i++)
// {
//     if (i % 9 == 0)
//         console.log(i)
//     }

// var i = 1
// while (i <= 200)
// {
//     console.log(i)
//     i++;
// }

// var x = 20;
// var y = 50;
// while (x < y)
// {
//     x++;
//     y--;
//     console.log("x: " + x)
//     console.log("y: "+ y)
//     if (x >= y)
//         break;
    
// }
// var i = 0
// while (i <= 500) {
//     console.log(i)
//     i++;
    
// }

// for (var i = 0; i <= 300; i++)
// {
//     if (i % 2 == 0 && i % 3 == 0)
//         console.log(i)
// }
// var sum = 0;
// for (var i = -30; i <= 50; i++)
// {
//     if (i % 2 == 0)
//     {
//         sum += i;
//     }
//     console.log(sum)
// }

// let name = prompt("Nhập tên của bạn:");
// console.log("Xin chào, " + name + "!");

// let a = parseInt(prompt("Nhập số a:"));
// let b = parseInt(prompt("Nhập số b (lớn hơn a):"));
// let x = parseInt(prompt("Nhập số x:"));

// let minDivisible = 0;

// for (let i = a; i <= b; i++) {
//   if (i % x === 0) {
//     minDivisible = i;
//     break;
//   }
// }

// if (minDivisible !== null) {
//   console.log("Số nhỏ nhất trong khoảng từ " + a + " đến " + b + " chia hết cho " + x + " là: " + minDivisible);
// } else {
//   console.log("Không có số nào trong khoảng từ " + a + " đến " + b + " chia hết cho " + x);
// }

// let s = prompt("Nhập chuỗi s:");
// let l = parseInt(prompt("Nhập số l:"));

// while (s.length < l) {
//   s += 'a';
// }

// console.log("Chuỗi sau khi thêm ký tự 'a': " + s);


// let s = prompt("Nhap chuoi s: ")
// if (s.length > 8)
// {
//     console.log("Chuỗi này ok")
// } else {
//     console.log("Ngắn quá, dài thêm tí nữa")
// }

// let s = parseInt(prompt("Nhap mot so s: "))
// if (s >= 18) {
//     console.log("Đủ 18 thì quẩy tiếp")
// } else if (s >= 16 && s < 18) {
//     console.log("Đợi thêm ít năm nữa")
// } else
//     console.log("Trẻ con không được ăn thịt chó")