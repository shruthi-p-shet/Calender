
const monthEle=document.querySelector(".date h1");
const dateEle=document.querySelector(".date p");
const daysElmt=document.querySelector(".days");
const monthIndex=new Date().getMonth();

//getting last day
const lastDate=new Date(new Date().getFullYear(),monthIndex+1,0).getDate();
//getting first day
const firstDay=new Date(new Date().getFullYear(),monthIndex,1).getDay()-1;
// console.log(firstDay)

// console.log(lastDate);

const months=['January','February','March','April',
'May','June','July','August','September','October',
'November','December'
];

//getting month i string formate
monthEle.innerHTML=months[monthIndex];
dateEle.innerHTML=new Date().toDateString();

let days="";
//filling blank days
for(let i=firstDay;i>0;i--){
   days+=`<div class="blank"></div>`; 
}

//inserting days dynamically
for(let i=1;i<=lastDate;i++){
    if(i===new Date().getDate()){
        days+=`<div class="today">${i}</div>`
    }else{
    days+=`<div>${i}</div>`;
    }
}

daysElmt.innerHTML=days;

console.log(new Date(5));