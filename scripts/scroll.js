<!--
// Jon's Install Directions
// Place where you want the scroller to be.
// <!--Scroller--><script language=JavaScript src="scripts/scroll.js" type="text/javascript"></script>
// ***********************************************
// Pausing updown message scroller- © Dynamic Drive DHTML code library (www.dynamicdrive.com)
// This notice MUST stay intact for legal use
// Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
// ***********************************************

//configure the below five variables to change the style of the scroller
var scrollerdelay='2000' //delay between msg scrolls. 3000=3 seconds.
var scrollerwidth='100px'
var scrollerheight='42px'
var scrollerbgcolor=''
//set below to '' if you don't wish to use a background image
var scrollerbackground=''

//configure the below variable to change the contents of the scroller
var messages=new Array()
messages[0]="<font face='Arial' size='1'><center>Site Updated:<br><font face='Arial' color='#6600CC' size='3'>09/05/08</font></center></font>"
messages[1]="<font face='Arial' size='1' color='blue'><center>&copy; 1998-2008<br>J. Kingsley<br>All rights reserved</center></font>"
messages[2]="<img src='graphics/flag10.gif'>"

///////Do not edit pass this line///////////////////////

var ie=document.all
var dom=document.getElementById

if (messages.length>2)
i=2
else
i=0

function move(whichdiv){
tdiv=eval(whichdiv)
if (parseInt(tdiv.style.top)>0&&parseInt(tdiv.style.top)<=5){
tdiv.style.top=0+"px"
setTimeout("move(tdiv)",scrollerdelay)
setTimeout("move2(second2_obj)",scrollerdelay)
return
}
if (parseInt(tdiv.style.top)>=tdiv.offsetHeight*-1){
tdiv.style.top=parseInt(tdiv.style.top)-5+"px"
setTimeout("move(tdiv)",50)
}
else{
tdiv.style.top=parseInt(scrollerheight)+"px"
tdiv.innerHTML=messages[i]
if (i==messages.length-1)
i=0
else
i++
}
}

function move2(whichdiv){
tdiv2=eval(whichdiv)
if (parseInt(tdiv2.style.top)>0&&parseInt(tdiv2.style.top)<=5){
tdiv2.style.top=0+"px"
setTimeout("move2(tdiv2)",scrollerdelay)
setTimeout("move(first2_obj)",scrollerdelay)
return
}
if (parseInt(tdiv2.style.top)>=tdiv2.offsetHeight*-1){
tdiv2.style.top=parseInt(tdiv2.style.top)-5+"px"
setTimeout("move2(second2_obj)",50)
}
else{
tdiv2.style.top=parseInt(scrollerheight)+"px"
tdiv2.innerHTML=messages[i]
if (i==messages.length-1)
i=0
else
i++
}
}

function startscroll(){
first2_obj=ie? first2 : document.getElementById("first2")
second2_obj=ie? second2 : document.getElementById("second2")
move(first2_obj)
second2_obj.style.top=scrollerheight
second2_obj.style.visibility='visible'
}

if (ie||dom){
document.writeln('<div id="main2" style="position:relative;width:'+scrollerwidth+';height:'+scrollerheight+';overflow:hidden;background-color:'+scrollerbgcolor+' ;background-image:url('+scrollerbackground+')">')
document.writeln('<div style="position:absolute;width:'+scrollerwidth+';height:'+scrollerheight+';clip:rect(0 '+scrollerwidth+' '+scrollerheight+' 0);left:0px;top:0px">')
document.writeln('<div id="first2" style="position:absolute;width:'+scrollerwidth+';left:0px;top:1px;">')
document.write(messages[0])
document.writeln('</div>')
document.writeln('<div id="second2" style="position:absolute;width:'+scrollerwidth+';left:0px;top:0px;visibility:hidden">')
document.write(messages[dyndetermine=(messages.length==1)? 0 : 1])
document.writeln('</div>')
document.writeln('</div>')
document.writeln('</div>')
}

if (window.addEventListener)
window.addEventListener("load", startscroll, false)
else if (window.attachEvent)
window.attachEvent("onload", startscroll)
else if (ie||dom)
window.onload=startscroll

-->