(function(){
	var header = document.createElement('header');
		var logoLink = document.createElement('a');
		logoLink.href = 'index.html';
			var img = document.createElement('img');
			img.src = 'Alternative_2.png';
			img.id = 'logo';
			img.alt = 'AEENI_logo.png';
			logoLink.appendChild(img);
		header.appendChild(logoLink);

		var nav = document.createElement('nav'),
			navul = document.createElement('ul'),
			tabnavText = ['Accueil','Activités','Partenaires','Membres'],
			tabnavLink = ['index','activities','partenaires','membres'];

				for(var i = 0; i < tabnavText.length; i++){
					var li = document.createElement('li'),
						a = document.createElement('a');
						a.href = tabnavLink[i] + '.html';
						a.innerHTML= tabnavText[i];
						a.innerHTML = tabnavText[i];
						if(document.getElementsByTagName('html')[0].id == tabnavLink[i]){
							a.style.backgroundColor = '#3D0914';
						}
						li.appendChild(a);
					navul.appendChild(li);
				}
			nav.appendChild(navul);
		header.appendChild(nav);
	document.body.appendChild(header);
})();