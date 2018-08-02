/* 777x777自定義頂 */
function getElementById_Value(id,type){
    var ids=document.getElementById(id);
    var styles=window.getComputedStyle(ids);
    return(styles.getPropertyValue(type));
}
function getElementByClass_Value(classes,type){
    var classs=document.getElementsByClassName(classes);
    var styles=window.getComputedStyle(classs[0]);
    return(styles.getPropertyValue(type));
}
function getElementById_RMC(id,classes){
    var idName = document.getElementById(id);
    idName.classList.remove(classes);
}

function TopFunction(){
    var i=0;
    var z=0;
    var opaclose=window.setInterval(function(){
        i++
        if(i>100){
            window.scrollTo(0,0);
            var opaopen=window.setInterval(function(){
                z++
                if(z>100){
                    window.clearInterval(opaopen);
                    return;
                }
                document.body.style.opacity=z/100; 
            },10);
            window.clearInterval(opaclose);
            return;
        }
        document.body.style.opacity=(1-i/100); 
    });  
};

var seeH=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;
window.onscroll=function(){
    if(document.documentElement.scrollTop>document.documentElement.clientHeight/2){
        document.getElementById("topicon").style.display="block";
    }else{
        document.getElementById("topicon").style.display="none";
    }
}

function loding(){
    var z=0;
    var opaopen=window.setInterval(function(){
        z++
        if(z>100){
            window.clearInterval(opaopen);
            return;
        }
        document.body.style.opacity=z/100; 
    },10);
}
/* 777x777自定義底 */