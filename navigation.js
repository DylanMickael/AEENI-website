var navigation = document.createElement('nav');
var navul = document.createElement('ul');
var tabnav = ['Accueil','Partenaires','Activités','membres'];
var tabLength = tabnav.length;

for(var i = 0; i < tabLength; i++){
	var li = document.createElement('li');
	li.innerHTML= tabnav[i];
	navul.appendChild(li);
}
navigation.appendChild(navul);
document.body.appendChild(navigation);