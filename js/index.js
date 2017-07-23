/**
 * Created by lenov on 2017/7/21.
 */

var oNavList = document.getElementById('nav-list');
var aLii = oNavList.getElementsByTagName('li');
for(var i=0; i<aLii.length; i++){
    aLii[i].index = i;
    aLii[i].onclick = function(){
        for(var i=0; i<aLii.length; i++){
            aLii[i].className = '';
        }
        this.className = 'select';
    };
}
var oTab = document.getElementById('tab');
var aLi = oTab.getElementsByTagName('li');//oTab.children;
var oVideoNotes = document.getElementById('video-notes');
var aDiv = oVideoNotes.getElementsByClassName('note');
for(var i=0; i<aLi.length; i++){
    aLi[i].index = i;
    aLi[i].onclick = function(){
        for(var i=0; i<aLi.length; i++){
            aLi[i].className = '';
            aDiv[i].className = 'note';
        }
        this.className = 'selected';
        aDiv[this.index].className = 'note selected';
    };
}