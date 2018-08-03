window.onresize = WindowChange;
window.onload = function(){
    WindowChange();

    loding();
}
function WindowChange(){
    var width_img=300;
    var blockQ=parseInt(parseFloat(getElementByClass_Value("person_pic","width"))/width_img);
    var space=(parseFloat(getElementByClass_Value("person_pic","width"))-width_img*blockQ)/(blockQ*2);
    var allflot_img=document.getElementsByClassName("allflot_img");
    if(space<10){
        blockQ=blockQ-1;
        space=(parseFloat(getElementByClass_Value("person_pic","width"))-width_img*blockQ)/(blockQ*2);
    }
    if(space>20){
        var spaceadd=(space-20)*2+width_img;
        for (let i=0;i<allflot_img.length;i++){
            allflot_img[i].style.width=spaceadd+"px";
        }
        space=(parseFloat(getElementByClass_Value("person_pic","width"))-parseFloat(getElementByClass_Value("allflot_img","width"))*blockQ)/(blockQ*2);
    }else{
        for (let i=0;i<allflot_img.length;i++){
            allflot_img[i].style.width=width_img+"px";
        }
    }
    var block= new Array();
    for(let i=0;i<blockQ;i++){
        block[i]=0;
    }
    for (let i=0;i<allflot_img.length;i++){
        var min=Math.min.apply(null, block);
        var where=block.indexOf(min);
        var heightadd=parseFloat(window.getComputedStyle(allflot_img[i]).getPropertyValue("height"));
        allflot_img[i].style.top=min+"px";
        allflot_img[i].style.left=parseFloat(getElementByClass_Value("allflot_img","width"))*where+(2*where+1)*space+"px";
        block[where]=block[where]+heightadd+space;
    }
    var max=Math.max.apply(null, block);
    var title_pic=document.getElementsByClassName("title_pic");
    var wheremax=block.indexOf(max);
    title_pic[1].style.top=max+80+"px";
    var brand=document.getElementsByClassName("brand");
    brand[0].style.top=block[wheremax]+80+"px";
}

function IneedAgive(){
    var ineed=parseInt(getElementByClass_Value("ineed","height"));
    var igive=parseInt(getElementByClass_Value("igive","height"));
    if(ineed>igive){
        var classs=document.getElementsByClassName("igive");
        classs[0].style.height=ineed+"px";
    }else{
        var classs=document.getElementsByClassName("ineed");
        classs[0].style.height=ineed+"px";
    }
}