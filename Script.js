//script.JS
let count=0;

//select element from the DOM 
const display=document.get element By id (display');
   const btnInc=document.get element By id ('increment');
const btnDec=document.get Element By id ('decrement');
count btn Ret =document.get Element By  id ('reset');

//Founction to update the color based on value
Founction update color(){ 
if (count>0)display.style.color="green";
else if (count< 0 )display.style="red";
else display.style.color="#333";
}

// Event listeners
bnt Inc.add Evenlistener(click',()=>{
   Count++;
   dis.text countent=count;
   update color();
});
   
   btn Dec.add Eventlistener(click',()=>{
     count--;
     display.text content=count;
   update color ();
});
  
   btn Reset.add Eventlistener=count;('click',()=>{
     count=0;
     display.textcontent=count;
     update color();
});
