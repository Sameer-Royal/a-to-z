var cls;
var path;
var audio;
for(var i=0;i<26;i++)
{
    $(".col-lg-4").eq(i).on("click",find);
}
function find(){
    cls=this.getAttribute("class");
    path=cls[28]+".mp3";
    audio=new Audio(path);
    audio.play();
}
$(document).on("keypress",f1);
function f1(event){
    cls=event.key;
    path=cls+".mp3";
    audio=new Audio(path);
    audio.play();
    trans();
}
for(var i=0;i<26;i++){
    $(".top-spacing").eq(i).on("click",trans);
}
function trans(){
    $(this).addClass("transparent");
    setTimeout(()=>{
        $(this).removeClass("transparent");
    },1500);
}