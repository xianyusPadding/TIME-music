window.onload=function(){
			var container=document.getElementById('container');
			var list=document.getElementById('list');
			var bottons=document.getElementById('bottons').getElementsByTagName('span');
			var prev=document.getElementById('prev');
			var next=document.getElementById('next');
			var index=1;
			var animated=false;
			var timer;

			function showButton(){
				for(var i=0;i<bottons.length;i++){
					if(bottons[i].className=='on'){
						bottons[i].className='';
						break;
					}
				}
				bottons[index - 1].className='on';
			}
			function animate(offset){
				animated=true;
				var newLeft=parseInt(list.style.left) + offset;
				var timer=300;		//位移总时间
				var interval=10;	//位移间隔时间
				var speed=offset/(timer/interval);   //每次的位移量

				function go(){
					if((speed<0 && parseInt(list.style.left)>newLeft) || (speed>0 && parseInt(list.style.left)>newLeft)){
						list.style.left=parseInt(list.style.left)+speed+'px';
						setTimeout(go,interval);
					}
					else{
						animated=false;
						list.style.left=newLeft + 'px';
						if(newLeft > -1263){
							list.style.left =- 6315 + 'px';
						}
						if(newLeft <- 6315){
							list.style.left = -1263 + 'px';
						}
					}
				}
				go();
				
			}
			function play(){
				timer=setInterval(function(){
					next.onclick();
				},3000);
			}
			function stop (argument) {
				clearInterval(timer);
			}
			prev.onclick=function(){
				if(index==1){
					index=5;
				}
				else{
					index -= 1
				}
				showButton();
				if(animated==false){
					animate(1263);
				}
			}
			next.onclick=function(){
				if(index==5){
					index=1;
				}
				else{
					index += 1
				}
				showButton();
				if(animated==false){
					animate(-1263);
				}
			}
			for(var i=0;i<bottons.length;i++){
				bottons[i].onclick=function(){
					if(this.className=='on'){
						return;
					}
					var myIndex=parseInt(this.getAttribute('index'));
					var offset=-1263*(myIndex - index);
					if(animated==false){
						animate(offset);
					}
					index=myIndex;
					showButton();
				}
			}
			container.onmouseover=stop;
			container.onmouseout=play;
		}