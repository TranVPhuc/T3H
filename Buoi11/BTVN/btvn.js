// //Quizze1
// const emailInput = document.getElementById('my-email')
// emailInput.addEventListener("input", function () {
//     const emailValue = emailInput.value;
//     if (validEmail(emailValue)) {
//         console.log("Day la email hop le")
//     } else {
//         console.log("Day khong phai email hop le")
//     }

// })

// function validEmail(email) {
//     let regrexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regrexEmail.test(email);
// }
// //Quizze2
// const input1 = document.getElementById('number-a')
// const input2 = document.getElementById('number-b')
// const button1 = document.getElementById('add')
// const button2 = document.getElementById('minus')


// button1.addEventListener('click', function () {
//     const inputValue1 = Number(input1.value);
//     const inputValue2 = Number(input2.value);
//     console.log(inputValue1 + inputValue2)
// })

// button2.addEventListener('click', function () {
//     const inputValue1 = Number(input1.value);
//     const inputValue2 = Number(input2.value);
//     console.log(inputValue1 - inputValue2)
// })
// //Quizze3
// const image = document.getElementById('image')
// const increaseButton = document.getElementById('tangSize')
// const decreaseButton = document.getElementById('giamSize')


// increaseButton.addEventListener('click', function () {
//     const imageWidth = Number(image.width) +10;
//     const imageHeight = Number(image.height) +10;
//     image.style.width = imageWidth + 'px'
//     image.style.height = imageHeight +'px'
// })

// decreaseButton.addEventListener('click', function () {
//     const imageWidth = Number(image.width) -10;
//     const imageHeight = Number(image.height) -10;
//     image.style.width = imageWidth + 'px'
//     image.style.height = imageHeight +'px'
// })

// const inputJob = document.getElementById('job')
// const jobButton = document.getElementById('createJob')
// const jobList = document.getElementById('jobToDo')

// jobButton.addEventListener('click', function () {
//     const inputValue = inputJob.value;
//     const newJob = `<li>${inputValue}</li>`
//     jobList.insertAdjacentHTML('beforeend', newJob)
// })

// const table = document.getElementById("user-table");
// const deleteButtons = table.getElementsByClassName("btn-delete");

// for (let i = 0; i < deleteButtons.length; i++) {
//   deleteButtons[i].addEventListener("click", function() {
//     const row = this.parentNode.parentNode;
//     row.remove();
//   });
// }


const regisButton = document.getElementById('register')
regisButton.addEventListener('click', function () {
  const nameValue = document.getElementById('name').value;
  const emailValue = document.getElementById('email').value;
  const passwordValue = document.getElementById('password').value;
  if (nameValue === "" || emailValue === "" || passwordValue === "")
  {
    alert("Vui long nhap du thong tin")  
  } else
  {
    alert("Dang ky thanh cong")
  }
 })