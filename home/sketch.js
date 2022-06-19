var openo = false;

document.getElementById("hamburger").addEventListener("click",function(){
    if(openo === false){
    document.getElementById("nav-links-mob").style.display = "block";
    openo = true;
    }else if(openo){
    document.getElementById("nav-links-mob").style.display = "none";
    openo = false;
    }else{
        console.log("myau");
    }
});