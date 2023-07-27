let arr1 = [1, 2, 4, 5, 6];
let arr2 = [1, 6, 8, 9, 0]; 

const commonValue = arr1.filter(value => arr2.includes(value))
console.log(commonValue)


arr3 = [1, 54, 6, 7]
const mutiplyBy5 = arr3.map(value => value + 5)
console.log(mutiplyBy5)

let m = [1, 2, 4, 5, 6, 7];
let n = [3, 5, 675, 8, 96];
let excludedNumber = [1, 8, 10, 96, 7];

const filteredM = m.filter(item => !excludedNumber.includes(item));
const filteredN = n.filter(item => !excludedNumber.includes(item));
console.log(filteredM)
console.log(filteredN)

let players = [
{ id: 11, name: 'Messi', age: 33 },
{ id: 12, name: 'Ronaldo', age: 34 },      
{ id: 13, name: 'Young', age: 35 },        
{ id: 14, name: 'Mane', age: 21 },          
{ id: 15, name: 'Salah', age: 24 },]
let playersModified = {...players}
console.log(playersModified)
