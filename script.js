(function(){
	var titreaside = document.getElementsByClassName('titreaside');

	for(var i = 0; i < titreaside.length; i++){
		titreaside[i].onmouseover = function(){
			this.style.paddingTop = '1px';
		}
		titreaside[i].onmouseout = function(){
			this.style.paddingTop='300px';
		}
	}
})();