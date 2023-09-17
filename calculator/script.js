let string="";
let str="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log("str= ", str);
        if(e.target.innerHTML=='='){
            string=eval(string);
            str=string;
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            string=string.slice(0,-1);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='sqrt'){
            string=Math.sqrt(string);
            str=string;
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='M+'){
            string=Number(str)+Number(string);
            str=string;
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='M-'){
            string=Number(string)-Number(str);
            str=string;
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='MRC'){
            document.querySelector('input').value=str;
            str="";
        }
        else if(e.target.innerHTML=='MU'){
            document.querySelector('input').value=str;
        }
        else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})