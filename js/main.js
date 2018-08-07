/* 2018 coding by 777x777 */
window.onresize = WindowChange;
window.onload = function(){
    WindowChange();
    loding();
}

function WindowChange(){
    var ActMargin=document.getElementsByClassName("action_work");
    var ActWidth=parseFloat(getElementByClass_Value("action_work","width"));
    var BodyWidth=parseFloat(getElementByClass_Value("work","width"));
    var NewMargin=(BodyWidth-Math.floor(BodyWidth/ActWidth)*(ActWidth))/(2*Math.floor(BodyWidth/ActWidth));
    var NewMargin2=(BodyWidth-(Math.floor(BodyWidth/ActWidth)-1)*(ActWidth))/(2*(Math.floor(BodyWidth/(ActWidth))-1));
    console.log(NewMargin);
    console.log(NewMargin2);
    if(BodyWidth<=340){
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


var run=0;
function work_s(work){
    run=1
    var workDivL=document.getElementById(work.id).parentNode.getElementsByTagName("div").length;
    var workDiv=document.getElementById(work.id).parentNode.getElementsByTagName("div")[workDivL-3];
    var workWidth=parseFloat(getElementByClass_Value("work_act","width"));
    var runWidth=parseFloat(window.getComputedStyle(workDiv).getPropertyValue("width"));
    var y=0;
    var x=(runWidth/workWidth*10)**2;
    var workDivId=window.setInterval(function(){
        y=x**(1/2)*15;
        if(y>=100){
            workDiv.style.width="100%";
        }
        if(y>=100 || run==0){
            window.clearInterval(workDivId);
            return;
        }
        workDiv.style.width=y+"%";
        x=x+0.5;
    })
}
function work_f(work){
    run=0;
    var workDivL=document.getElementById(work.id).parentNode.getElementsByTagName("div").length;
    var workDiv=document.getElementById(work.id).parentNode.getElementsByTagName("div")[workDivL-3];
    var workWidth=parseFloat(getElementByClass_Value("work_act","width"));
    var runWidth=parseFloat(window.getComputedStyle(workDiv).getPropertyValue("width"));
    var y=runWidth/workWidth*100;
    var workDivId=window.setInterval(function(){
        if(y<=0){
            workDiv.style.width="0%";
            window.clearInterval(workDivId);
            return
        }
        workDiv.style.width=y+"%";
        y--;
    })
}
