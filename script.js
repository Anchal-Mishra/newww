let a=50;
let b=100;


 console.log((a%2==0)?'even':'odd');
 console.log(a>b?a:b);

 let age=20;
console.log(age>18?'eligible to vote':'not eligible to vote');

let str="anchal mishra"
let rev="";
let vowStr=""

for(let i=str.length-1;  i>=0; i--){
    if(str[i]==('a'||'e'||'i'||'o'||'u')) vowStr+=str[i]
}
console.log(vowStr);

// test();

var test = function(){
 console.log("Hi");
}
test();

let imgEl=document.getElementById('img');
let arrImg=[
    "https://images.unsplash.com/photo-1777195680731-454a40402349?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1773781556147-2106e3145777?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1666277012369-c534dd703d71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"
]

let num=0;

    let ids=setInterval(()=>{
        imgEl.setAttribute('src',arrImg[num]) 
        num=((num+1)% arrImg.length) 

    },2000)

setTimeout(()=>{
    clearInterval(ids)
}
,20000)