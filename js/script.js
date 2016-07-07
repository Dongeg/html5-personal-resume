$(function(){
	var navContent= document.getElementById("nav-content");
	var columns=getChildNodes(navContent);
	var wx=document.getElementById("wx");
	var wp=document.getElementById("wp");
	var q=document.getElementById("q");
	var qp=document.getElementById("qp");
	
	var bilbili=document.getElementById("bilbili");
	var jike=document.getElementById("jike");
	var muke=document.getElementById("muke");
	var wangyiyun=document.getElementById("wangyiyun");
	var youtube=document.getElementById("youtube");
	
	columns[0].className="active";
	wp.style.display="none";
	qp.style.display="none";
	var toggle=document.getElementById("toggle");
	var buttons=getChildNodes(toggle);
	for(var i=0;i<buttons.length;i++){
		columns[i].onclick=function(){
			for(var j=0;j<buttons.length;j++){
				columns[j].className=""
			}
			this.className="active";
		}
		buttons[i].onclick=function(){
			for(var j=0;j<buttons.length;j++){
				buttons[j].style.background="";
			}
			this.style.background="#fff";
		}
	}
	wx.onmouseover=function(){
	   wp.style.display="block";
	}
	wx.onmouseout=function(){
	   wp.style.display="none";
	}
	q.onmouseover=function(){
	   qp.style.display="block";
	}
	q.onmouseout=function(){
	   qp.style.display="none";
	}
		
	//个人介绍右侧动画
	$("#bilbili").mouseover(function(){
		$("#bilbili").animate({
			height:'200px',
			width:'200px'
		});
	});
	$("#bilbili").mouseout(function(){
	$("#bilbili").animate({
		height:'100px',
		width:'100px'
		});
	});
	
})

function getChildNodes(ele){
   var childArr=ele.children,
         childArrTem=new Array();  //  临时数组，用来存储符合条件的节点
    for(var i=0,len=childArr.length;i<len;i++){
        if(childArr[i].nodeType==1){
            childArrTem.push(childArr[i]);  // push() 方法将节点添加到数组尾部
        }
    }
    return childArrTem;
}

