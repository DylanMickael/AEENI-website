(function(){
    var slideText = document.getElementsByClassName('slideText');
    for(var i in slideText){
        slideText[i].addEventListener('mouseenter', function(){
            this.style.paddingTop = '0px';
            this.style.background = 'linear-gradient( rgba(90, 90, 90, 0.1), rgba(0, 0, 0, .9))';
        }, false);
        slideText[i].addEventListener('mouseleave', function(){
            this.style.paddingTop = '100%';
            this.style.background = 'linear-gradient( rgba(100, 100, 100, 0), rgba(0, 0, 0, .8))';
        }, false);
    }
})();