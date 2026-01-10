h1=document.createElement("h1");
h1.textContent ="hello ji kaise ho";
//document.body.append(h1);
console.log(h1);

//document.querySelector("body").prepend(h1);
document.querySelector("body").append(h1);
h1.remove();


let h2=document.createElement("h2");
h2.textContent="hello world";
document.querySelector("div").appendChild(h2);