//Stack: last in first out: vao sau ra truoc
 
// setTimeout(()=>{
//     console.log(4);
//     setTimeout(()=>{
//       console.log(3);
//       setTimeout(()=>{
//         console.log(2);
//       }, 2000);  
//       setTimeout(()=>{
//         console.log(1);
//       }, 1000);      
//     },3000);
//   },4000);

 
var promise = new Promise(function(resolve, reject){
    // //neu thanh cong
    // resolve();
    // //neu that bai
    // reject();
    setTimeout(()=>{
        let x = 4;
        if (x > 5){
            resolve();
        }
        else {
            reject();
        }
    },4000)
});
promise.then(function(){
    console.log('Vao resolve')
}).catch(function error (){
    console.log('vao reject')
})