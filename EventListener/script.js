/*let h1=document.querySelector("h1");
h1.addEventListener("click",function(){
    h1.style.color ="red";
});

*/

function dblclick(){
    p.style.color ="Green";
};

let p= document.querySelector("p");
p.addEventListener("dblclick",dblclick);

p.removeEventListener("dblclick",dblclick);


let inp=document.querySelector("input");
inp.addEventListener("input",function(evt){
   if(evt.data !== null){
    console.log(evt.data)
   }
    //console.log("typed");
})