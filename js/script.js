var output='';
let buttons=document.querySelectorAll('button:not(.delete,.equal,.reset)');

buttons.forEach(ele=>{
  ele.addEventListener("click",()=>{
    document.getElementsByTagName("small")[0].style.display="none"
    document.getElementsByTagName("small")[1].style.display="none";

    document.getElementsByClassName("result")[0].style.color="black";
    document.getElementsByClassName("result")[0].style.fontWeight="400";

    if((ele.innerHTML=='+'||ele.innerHTML=='-'||ele.innerHTML=='*'||ele.innerHTML=='/')&&(output[output.length-1]=='+'||output[output.length-1]=='-'||output[output.length-1]=='*'||output[output.length-1]=='/')){
  
output=output.slice(0,-1)
output+=ele.innerHTML

    }
else{output+=ele.innerHTML;}
document.getElementsByClassName("result")[0].innerHTML=output
  })
})



document.getElementsByClassName("equal")[0].addEventListener("click",()=>{
  if(output.slice(output.length-1)=='+'||output.slice(output.length-1)=='-'||output.slice(output.length-1)=='*'||output.slice(output.length-1)=='/'){
document.getElementsByTagName("small")[0].style.display="block";
  }
  else if(eval(output)=="Infinity"||eval(output)=="-Infinity"){
    document.getElementsByClassName("result")[0].innerHTML=output;
    document.getElementsByTagName("small")[1].style.display="block";
  }
else{
  document.getElementsByClassName("result")[0].innerHTML=eval(output);
  output=  document.getElementsByClassName("result")[0].innerHTML;
  document.getElementsByClassName("result")[0].style.color="rgb(35, 181, 35)";
  document.getElementsByClassName("result")[0].style.fontWeight="500";
}
})



document.getElementsByClassName("delete")[0].addEventListener("click",()=>{
  document.getElementsByTagName("small")[0].style.display="none"
  document.getElementsByTagName("small")[1].style.display="none";
  output=output.slice(0,-1)
  document.getElementsByClassName("result")[0].innerHTML=output
})



document.getElementsByClassName("reset")[0].addEventListener("click",()=>{
  document.getElementsByTagName("small")[0].style.display="none"
  document.getElementsByTagName("small")[1].style.display="none";
  output=''
  document.getElementsByClassName("result")[0].innerHTML=output
})