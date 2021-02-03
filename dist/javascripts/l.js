var tips=document.querySelectorAll(".inputs p");
var inputs =document.querySelectorAll("input");
for(var i=0; i<inputs.length; i++){
    inputs[i].onfocus=function(){
        this.style.borderColor="orange";
        for(var i=0;i<inputs.length;i++){
            if(inputs[i]===this){
                break
            }
        }
        for(var k=0; k<tips.length; k++){
            tips[k].style.display ="none";
        }
        tips[i].style.display="block";
    }
    inputs[i].onblur=function(){
        this.style.borderColor="#"+000;
    }
}
