const text = ['طراح وب' , "مدرس جاوااسکریپت",'برنامه نویس فرانت اند']

let count = 0
let index = 0;
let current = ""
let later = "";
(function type() {
if(count === text.length){
    count = 0
}

current = text[count]
later = current.slice(0 , ++index)
console.log(later);
document.querySelector('span').textContent = later
if(later.length === current.length){
    count++
    index = 0
}

setTimeout(type , 250)
})()