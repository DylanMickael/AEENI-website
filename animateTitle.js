(function(){
    function addEvent(elem, type, func){
        if(elem.addEventListener){
            elem.addEventListener(type, func);
        }
        else{
            elem.attachEvent('on' + type, func);
        }
    }
    
    var id = null;
    var text = 'ASSOCIATION DES ETUDIANTS DE L\'ECOLE NATIONALE D\'INFORMATIQUE';
    var charTab = [];
    var letterIndex = 0;
    var titre = document.getElementById('titre');
    for(var i = 0; i < text.length; i++){
        charTab.push(text.charAt(i));
    }
    
    id = setInterval(animateTitle, 50);
    addEvent(titre, 'click', function(){
        if(id){
            clearInterval(id);
        }
        titre.innerHTML = text;
    })
    
    function animateTitle(){
        if(letterIndex == text.length){
            clearInterval(id);
        }
        else{
            titre.innerHTML += charTab[letterIndex++];
        }
    }
})();