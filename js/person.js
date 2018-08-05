window.onresize = function(){
    allflot_img();
    flot_img();
}
window.onload = function(){
    allflot_img();
    IneedAgive();
    flot_img();
    loding();
}
function allflot_img(){
    var width_img=260;
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
        block[i]=50;
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
    brand[0].style.top=block[wheremax]+110+"px";
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

function flot_img(){
    var ActMargin=document.getElementsByClassName("all_img");
    var ActWidth=parseFloat(getElementByClass_Value("all_img","width"));
    var brand=parseFloat(getElementByClass_Value("brand","width"));
    var NewMargin=(brand-Math.floor(brand/(ActWidth))*(ActWidth+1))/(2*Math.floor(brand/(ActWidth)));
    var NewMargin2=(brand-(Math.floor(brand/(ActWidth))-1)*(ActWidth+1))/(2*(Math.floor(brand/(ActWidth))-1));
    if(brand<=340){
        for(let i=0;i < ActMargin.length;i++){
            ActMargin[i].style.margin="20px "+NewMargin+"px";
        }
    }
    else{
        if(NewMargin<=10){
            for(let i=0;i < ActMargin.length;i++){
                ActMargin[i].style.margin="20px "+NewMargin2+"px";
            }
        }else{
            for(let i=0;i < ActMargin.length;i++){
                ActMargin[i].style.margin="20px "+NewMargin+"px";
            }
        }
    }
}