function topHeight(){
	document.documentElement.scrollTop = 0;
	window.addEventListener('scroll', function (e) {
		var d_h0 = document.documentElement.scrollHeight;
		var d_h1 = document.documentElement.scrollTop;
		var d_h2 = document.documentElement.clientHeight;
		var d_h3 = d_h0 - d_h2
		var d_h4 = parseInt((d_h1/d_h3)*100) + "%";
	    var newLocal = d_h4;
		document.getElementById("topheights").innerHTML=newLocal;
		var topt = document.getElementById("topt");
		if(d_h1 > 0){
			topt.style.display = "block"
		}else{
			topt.style.display = "none"
		}
	})
}	
topHeight();