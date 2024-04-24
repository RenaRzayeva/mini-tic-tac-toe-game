let h = document.querySelector('h1');
console.log(h);
let a=""

let btn2=document.querySelector(".btn")
let btn = document.querySelectorAll('.btn1');


btn.forEach(btn => {
  
    
    // btn.addEventListener('keyup', (event) => {
    function size(event){
        if (event.key==="0"){
            a="x-in addimi";
            h.innerText=a;
            btn.style.color = "blue";
            btn.style.backgroundColor="red"
            btn.innerText = "0";
             a="x-in addimi";
             h.innerText=a;
            //  flag=false;
            btn.removeEventListener("keyup",color)


            
        }}
    
         function color(event){if(event.key=="x") {a="0-in addimi";
         h.innerText=a;
            btn.style.color = 'red';
            btn.style.backgroundColor="blue"
            btn.innerText = "x";
            a="0-in addimi";
            h.innerText=a;
            btn.removeEventListener("keyup",size)
        }}
        btn.addEventListener("keyup",size)
        btn.addEventListener("keyup",color)
        
       
})





