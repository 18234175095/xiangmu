window.onload=function(){
	/********************banner********************/

var Pic=document.getElementById("pic");
var Img=Pic.getElementsByTagName("img");
Img[0].style.display='block';

var Cspan=document.getElementById("dian");
var Span=Cspan.getElementsByTagName('span');

			for(var i=0;i<Span.length;i++){
				Span[i].index=i;			
				Span[i].onmousemove=function(){					
													  	
				  	for(var j=0;j<Span.length;j++){
				  	Span[j].style.background="#9d978b";
				  	Img[j].style.display="none";
				  	
				  	}				
					this.style.background="#ffffff";
				  	Img[this.index].style.display="block";	
					}					
			}		

		var move=0;
		function moveR(){
				for(var j=0;j<Span.length;j++){
				  	Span[j].style.background="#9d978b";
				  	Img[j].style.display="none";
				  	}
				move++;
				if(move>Span.length-1)move=0;
					Span[move].style.background="#ffffff";
				  	Img[move].style.display="block";
			}
			Clear=setInterval(moveR,1500);
  
  var Banner=document.getElementById("banner");
  		Banner.onmouseover=function(){	
			clearInterval(Clear);
		}	
		Banner.onmouseout=function(){
			Clear=setInterval(moveR,1500);
		}
  
  
  
 var Z=document.getElementById('zuo');
 var Y=document.getElementById("you");
  
  		Z.onclick=function(){
				for(var j=0;j<Span.length;j++){
				  	Span[j].style.background="#9d978b";
				  	Img[j].style.display="none";
				  	}
				move--;
				if(move<0)move=Span.length-1;
					Span[move].style.background="#ffffff";
				  	Img[move].style.display="block";
			}
		
		Y.onclick=moveR;


/**********************************************/
}
