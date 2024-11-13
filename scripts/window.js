<!--

// Jon's Install Directions
// Copy the tag below to link to the java file.
// Place in the Body tags of the document
// Remember to verify the url to the script
// This script is used with links to pop open new windows
// <!--Window--><script language=JavaScript src="window.js" type="text/javascript"></script>

// add the code below into the link <a> tag to pop open the window
// onclick="NewWindow(this.href,'name','400','400','yes');return false"


// Auto center window script- Eric King (http://redrival.com/eak/index.shtml)
// Permission granted to Dynamic Drive to feature script in archive
// For full source, usage terms, and 100's more DHTML scripts, visit http://dynamicdrive.com

var win = null;
function NewWindow(mypage,myname,w,h,scroll){
LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
settings =
'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable,status,toolbar,location,menubar'
win = window.open(mypage,myname,settings)
}

-->