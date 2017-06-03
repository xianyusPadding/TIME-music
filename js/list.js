var url=window.location.href;
var str=url.split('?');
var action=str[1].split('=');
var content=document.getElementById('content');
if(action[1]==1){
content.innerHTML="<img src ='1.jpg'>";
}
if(action[1]==2){
content.innerHTML="<p>文本</p>";
}
if(action[1]==3){
content.innerHTML="<embed></embed>";
}
if(action[1]==4){
content.innerHTML="<img src ='1.jpg'>";
}
