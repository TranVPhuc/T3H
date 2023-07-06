// const computer = {
//     key1: value1,
//     key2: value2,
//     keyn: valuen
// }

const computer = {
    name: 'Lenovo Thinkpad',
    price: 10,
    vendor: 'Lenovo',
    color: 'Purple',
    abc: 125, 
    1: 'Mot',
    '0': 'khong'
}
//C1: dung khi biet ro key
// console.log(computer.name)
//C2: dung khi key dang la gia tri cua 1 bien khac
// console.log(computer['price'])
// const price = 'abc'
//console.log(computer[price]) //truy cap den key abc trong object

//Update
// const student = {
//     name: 'Nguyen Van A',
// }

// console.log(student)
// //student['name'] = 'Tran Thi B'
// student.name = 'Tran Thi B'
// student.age = 15
// console.log(student)

// delete student.age
// console.log(student)

// const listStudent = [
//     {
//         name: 'Nguyen Van A',
//         gender: 'girl',
//     },
//     {
//         name: 'Tran Thi B',
//         gender: 'girl',
//         skills:['C++', 'Python']
//     }
// ]

// console.log(listStudent[1].skills[0])

// for (let key in computer) {
//     console.log(computer[key])
// }

// const arr1 = [1, 2, 3]
// const arr2 = []
// for (let key of arr1) {
//     arr2.push(key)
// }
// arr1[2]= 25
// console.log(arr1)
// console.log(arr2)

// function nameFn() {
//     //codeblock
// }

// function calSum(a,b) {
//     let sum1 = 0;
//     for (let i = a; i <= b; i++){
//         sum1+= i
//     }
//     return(sum1)
// }

// console.log(calSum(-20, 100))

// function helloPerson(name) {
//     return ("Hello world, " + name)
// }

// console.log(helloPerson('Phuc'))

// function ptBac2(a, b)
// {
//     return (a+b)**2
// }
// console.log(ptBac2(1, 2))


// function inputa(a) {
//     while ( a < 0) {
//         a = Number(prompt("Nhap vao 1 so cho den khi so lon hon 0"))
//     }
//     return a
// }
// console.log(inputa(-2))

//CallBack
// function A() {
//     console.log('Function A');
// }

// function B(callback) {
//     callback();
//     console.log('Function B')
// }

// B(A)

//Thuc hien 1 nhiem vu sau n milisecond
//setTimeout(callback,n)

// function logger() {
//     console.log("Test Timeout")
// }
// setTimeout(logger,1000)

