let slideIndex=1;
let remainingtime=70000;
function settime(){
    if (remainingtime==0) return;
    let h=Math.floor(remainingtime/3600);
    let m=Math.floor((remainingtime%3600)/60);
    let s=Math.floor(remainingtime%3600)%60;
    document.querySelector('#hours').innerHTML=h;
    document.querySelector('#minutes').innerHTML=m;
    document.querySelector('#seconds').innerHTML=s;

}

setInterval(()=>{
    remainingtime -=1;
    settime()
},1000);


function setSlide(input,index){
    slideIndex=index; 
    let item=document.querySelector(`#${input}`)
    let slides=[...document.querySelector('.slides').children];
    slides.forEach((element)=>{
        element.classList.remove('active');
    })
    item.classList.add('active');
}
    setInterval(()=>{
        slideIndex +=1;
     if(slideIndex==4){
        slideIndex=1; 
     }
     setSlide(`slide${slideIndex}`,slideIndex)
    },3000)