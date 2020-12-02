
function onHover(id){
      
  start=new Date()
};

function onHoverout(id){

  final=new Date()
  console.log(((final.getTime()-start.getTime())/1000)+" secs");
};




document.getElementById("signbtn").onclick = function(){
    let x = document.getElementById("email").value; 
    if(!x.includes("@")){
      document.getElementById("mail_form").classList.add("error");
      document.getElementById("mail_form").focus();   
    }
    else{
      document.getElementById("mail_form").blur();   

    }
}
document.getElementById("email").onclick = function(){
  document.getElementById("mail_form").classList.remove("error");
}

