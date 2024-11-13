<!--

// Jon's Install Directions
// Copy the tag below to link to the java file.
// Place in exacr place you would like the chart to show up on the page.
// Do Not place this link in header or at the top of the body tag.
// Remember to verify the url to the script
// <!--Death Count--><script language=JavaScript src="deathcount.js" type="text/javascript"></script>



// CREDITS:
// Realtime Death Counter 2.01
// By Peter Gehrig
// Copyright (c) 2003 Peter Gehrig. All rights reserved.
// Permission given to use the script provided that this notice remains as is.
// Additional scripts can be found at http://www.24fun.com
// info@24fun.com
// 10/6/2003
// The script is based on statistics by World Health Organisation

// IMPORTANT:
// If you add this script to a script-library or script-archive
// you have to add a highly visible link to
// http://www.24fun.com on the webpage
// where this script will be featured

var cause=new Array()

// delete or add new death-causes like this: 
// cause[x]="cause of death|number of deaths per year"
cause[0]="<strong>All causes</strong>|56553860"
cause[1]="Infectious and parasitic diseases|10937452"
cause[2]="Tuberculosis|1644381"
cause[3]="Syphilis|167451"
cause[4]="AIDS|2865804"
cause[5]="Diarrhoeal diseases|2001193"
cause[6]="Childhood-cluster diseases|1318151"
cause[7]="Measles|744864"
cause[8]="Tetanus|281897"
cause[9]="Meningitis|173333"
cause[10]="Hepatitis B|81050"
cause[11]="Hepatitis C|45599"
cause[12]="Malaria|1123764"
cause[13]="Leprosy|4133"
cause[14]="Dengue|21170"
cause[15]="Respiratory infections|3947426"
cause[16]="Maternal haemorrhage|143178"
cause[17]="Maternal sepsis|77096"
cause[18]="Obstructed labour|42890"
cause[19]="Abortion|59166"
cause[20]="Low birth weight|1345471"
cause[21]="Birth asphyxia and birth trauma|689694"
cause[22]="Protein-energy malnutrition|257530"
cause[23]="Vitamin A deficiency|28358"
cause[24]="Iron-deficiency anaemia|137847"
cause[25]="<strong>Cancers</strong>|7114896"
cause[26]="Mouth and oropharynx cancers|326388"
cause[27]="Oesophagus cancer|437677"
cause[28]="Stomach cancer|849698"
cause[29]="Mouth and oropharynx cancers|326388"
cause[30]="Oesophagus cancer|437677"
cause[31]="Colon and rectum cancers|615233"
cause[32]="Liver cancer|616367"
cause[33]="Pancreas cancer|225032"
cause[34]="Trachea, bronchus, lung cancers|1213095"
cause[35]="Melanoma and other skin cancers|65921"
cause[36]="Breast cancer|478687"
cause[37]="Cervix uteri cancer|258404"
cause[38]="Prostate cancer|269118"
cause[39]="Leukaemia|260341"
cause[40]="Diabetes mellitus|895454"
cause[41]="Unipolar depressive disorders|12448"
cause[42]="Schizophrenia|23744"
cause[43]="Epilepsy|108773"
cause[44]="Alcohol use disorders|86697"
cause[45]="Alzheimer and other dementias|367837"
cause[46]="Parkinson disease|91988"
cause[47]="Multiple sclerosis|15019"
cause[48]="Drug use disorders|68414"
cause[49]="<strong>Cardiovascular diseases</strong>|16585393"
cause[50]="Rheumatic heart disease|337622"
cause[51]="Hypertensive heart disease|874013"
cause[52]="Ischaemic heart disease|7180906"
cause[53]="Cerebrovascular disease|5454375"
cause[54]="Inflammatory heart diseases|375104"
cause[55]="Other cardiovascular diseases|2363372"
cause[56]="Chronic obstructive pulmonary disease|2672275"
cause[57]="Asthma|225723"
cause[58]="Peptic ulcer disease|262350"
cause[59]="Cirrhosis of the liver|796004"
cause[60]="Road traffic accidents|1194115"
cause[61]="Poisonings|342977"
cause[62]="Falls|385017"
cause[63]="Fires|309374"
cause[64]="Drownings|402797"
cause[65]="Other unintentional injuries|873917"
cause[66]="Self-inflicted injuries|849106"
cause[67]="Violence|500487"
cause[68]="War|229598"


// font
var thisfont="Arial"

// font-size
var thissize=10

// font-color
var thiscolor="black"


// font of title
var titlefont="Arial"

// font-size of title
var titlesize=14

// font-color
var titlecolor="black"


// backgroundcolor title
var titlebg=""

// backgroundcolor death counter
var bg=""


// do not edit below this line
var t = 0
var enterTime = new Date()
var enterTime = Math.floor(enterTime.getTime()/1000)
var secyear=31536000
var rowflag=false
var i_causes=0

if (document.getElementById) {
	initdisplay()
}

function initdisplay() {
	document.write('<TABLE BORDER=0 CELLSPACING=0 CELLPADDING=0 bgcolor="'+bg+'">')
	document.write('<tr valign=top>')
	document.write('<td colspan=4 style="font-family:'+titlefont+';font-size:'+titlesize+'pt;color:'+titlecolor+';background-color:'+titlebg+'" id="titlecell" align=center>')
	document.write('&nbsp;&nbsp;Realtime Death counter: Deaths within the last 0 seconds')
	document.write('</td></tr>')
	
	document.write('<tr valign=top>')
	document.write('<td colspan=2>')
	document.write('&nbsp;')
	document.write('</td></tr>')
	document.write('<tr valign=top>')
	document.write('<td><TABLE BORDER=0 CELLSPACING=0 CELLPADDING=0>')
	for (i=0; i<=(cause.length)/2; i++) {
		var content=cause[i].split("|")
		document.write('<tr valign=top>')
		document.write('<td align=right id="cell'+i+'" style="font-family:'+thisfont+';font-size:'+thissize+'pt;color:'+thiscolor+'">')
		document.write('empty')
		document.write('</td>')
		document.write('<td>')
		document.write('&nbsp;&nbsp;')
		document.write('</td>')
		document.write('<td align=left style="font-family:'+thisfont+';font-size:'+thissize+'pt;color:'+thiscolor+'">')
		document.write(content[0]+" ")
		document.write('</td>')
		document.write('</tr>')
		i_causes++
	}			
	document.write('</TABLE></td>')
	document.write('<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>')
	document.write('<td><TABLE BORDER=0 CELLSPACING=0 CELLPADDING=0>')
	for (i=i_causes; i<=cause.length-1; i++) {
		var content=cause[i].split("|")
		document.write('<tr valign=top>')
		document.write('<td align=right id="cell'+i+'" style="font-family:'+thisfont+';font-size:'+thissize+'pt;color:'+thiscolor+'">')
		document.write('empty')
		document.write('</td>')
		document.write('<td>')
		document.write('&nbsp;&nbsp;')
		document.write('</td>')
		document.write('<td align=left style="font-family:'+thisfont+';font-size:'+thissize+'pt;color:'+thiscolor+'">')
		document.write(content[0]+" ")
		document.write('</td>')
		document.write('</tr>')
	}			
	document.write('</TABLE></td></TABLE>')
}

function docounter() {
	var now = new Date()
	var now=Math.floor((now.getTime()/1000))
	var hereSince = now - enterTime
	for (i=0; i<=cause.length-1; i++) {
		var content=cause[i].split("|")
		content[1]=Math.floor(content[1]/secyear*hereSince)
    	document.getElementById('cell'+i).innerHTML=content[1]
    	document.getElementById('titlecell').innerHTML="&nbsp;&nbsp;Realtime Death counter: Deaths within the last "+hereSince+" seconds"
	}	
	var setT = setTimeout("docounter()",1000)		
}


function showNr(zahlProSec,hereSi,gifNa) {

	var zahlSince = ""+Math.floor(hereSi*zahlProSec) 
	var rechtsPos = 9 -	zahlSince.length-1

	for (i=0; i<= zahlSince.length-1; i++) {
		document.images[gifNa+(i+rechtsPos)].src = "z"+zahlSince.charAt(i)+".gif"
	}
}

if (document.getElementById) {
	window.onload=docounter
}

-->