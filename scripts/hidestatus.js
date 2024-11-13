<!--

//Hide status bar msg II script- by javascriptkit.com
//Visit JavaScript Kit (http://javascriptkit.com) for script
//Credit must stay intact for use

function hidestatus(){
window.status=''
return true
}

if (document.layers)
document.captureEvents(Event.MOUSEOVER | Event.MOUSEOUT | Event.MOUSEDOWN  | Event.MOUSEUP)

document.onmouseover=hidestatus
document.onmouseout=hidestatus
document.onmousedown=hidestatus
document.onmouseup=hidestatus

-->