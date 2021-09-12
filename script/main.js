const Select = document.querySelector('.select');
Select.addEventListener('click', function(event){
    Select.classList.toggle('active');
})
const form5 = document.querySelector('.form5');
form5.addEventListener('click', function(event){
    Select.classList.remove('active');
})
const form4 = document.querySelector('.form4');
form4.addEventListener('click', function(event){
    Select.classList.remove('active');
})
const form3 = document.querySelector('.form3');
form3.addEventListener('click', function(event){
    Select.classList.remove('active');
})
const form2 = document.querySelector('.form2');
form2.addEventListener('click', function(event){
    Select.classList.remove('active');
})
const form1 = document.querySelector('.form1');
form1.addEventListener('click', function(event){
    Select.classList.remove('active');
})