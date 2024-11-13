<!--

// Jon's Install Directions
// Copy the tag below to link to the java file.
// Place in the Body tags of the document
// Remember to verify the url to the script
// <!--Temperature Conversion--><script language=JavaScript src="convert.js" type="text/javascript"></script>
// Then place the code found in convert.txt document where you want the conversion chart to show up/


// TEMPERATURE CONVERSION SCRIPT - V 1.0
// AUTHOR: Brian Gosselin OF http://scriptasylum.com

function convertTemp(){
var d=document.forms["tempConvert"];
var inp=d.intemp.value;
if((inp!='')&&(!isNaN(inp))&&(inp!=Number.POSITIVE_INFINITY)&&(inp!=Number.NEGATIVE_INFINITY)){
inp=eval(inp);
switch(d.fromU.selectedIndex){
case 0: //C->K
inp=inp+273.15; break;
case 1: //F->K
inp=(inp+459.67)/1.8; break;
case 2: //R->K
inp=inp/1.8; break;
}
switch(d.toU.selectedIndex){
case 0: //K->C
inp=inp-273.15; break;
case 1: //K->F
inp=(inp*1.8)-459.67; break;
case 2: //K->R
inp=inp*1.8; break;
}
d.outtemp.value=(Math.round(inp*100)/100); //CHANGE THE 2nd NUMBER FOR MORE OR LESS ACCURACY
}else d.outtemp.value='(Invalid input)';
}

-->