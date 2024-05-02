let div = document.querySelectorAll(".roadmap .tab-content button");
let bar = document.querySelector(".progress .progress-bar");
let p=document.querySelector(".per");

let per=0;

let cb=[];
for(let i=0 ; i<div.length ; i++)
{
    let b = document.createElement("input");
    b.setAttribute("class", "form-check-input");
    b.setAttribute("type" , "checkbox");
    b.style.margin= "10px";
    cb.push(b);
}

for (let i = 0; i < div.length; i++) {
    div[i].insertAdjacentElement("afterbegin",cb[i]);
}

div.forEach(function (el) {
    el.addEventListener("click",score , { once: true });
});

function score(){
    per+=8.3;
    console.log(this);
    this.style.backgroundColor = "#198754";
    bar.style.width=`${[per]}%`;
    if(per < 99){
        p.innerHTML=`${parseInt(per)}%`;
    }
    else{
        p.innerHTML="100%";
        bar.style.width+=3;
    }
}
