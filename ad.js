var imageAd = document.getElementsByClassName('ad');
var ada=document.getElementById('ada');
var i = 0;
var Id=null;
function changerSlides(){
	imageAd[i].style.opacity=1
	for (var j = 0; j <imageAd.length; j++) {
		if (i!=j){
			imageAd[j].style.opacity=0;
		}
	}
	i = (i+1)% imageAd.length;
	

}
Id=setInterval(changerSlides,3000);
ada.addEventListener('mouseout',function(){
	Id=setInterval(changerSlides,3000);
})
ada.addEventListener('mouseover',function(){
    clearInterval(Id);
},false)
