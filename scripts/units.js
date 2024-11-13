<!--

// Jon's Install Directions
// Copy the tag below to link to the java file.
// Place in the Body tags of the document
// Remember to verify the url to the script
// <!--Unit Conversion--><script language=JavaScript src="units.js" type="text/javascript"></script>
// Then place the code found in units.txt document where you want the conversion chart to show up/




function convert(index){
var tmp=new Object();
var d=document.f;
tmp.name=units[index];
tmp.t1=d[('t1'+tmp.name)].value
if(typeof parseInt(tmp.t1) != "number"){
tmp.t1=1;
d[('t1'+tmp.name)].value=1;
}
tmp.s1=d[('s1'+tmp.name)].selectedIndex;
tmp.s2=d[('s2'+tmp.name)].selectedIndex;
tmp.c1=eval(units[index]+'['+tmp.s1+'][1]');
tmp.c2=eval(units[index]+'['+tmp.s2+'][1]');
tmp.result=''+eval(tmp.t1+'*'+tmp.c1+'/'+tmp.c2);
tmp.test=tmp.result.indexOf("e");
if(tmp.test!=(-1)){
tmp.test=tmp.result.substring(tmp.test,tmp.result.length);
tmp.result=tmp.result.substring(0,10)+tmp.test
}else{
tmp.result=tmp.result.substring(0,13)
}
d[('t2'+tmp.name)].value=tmp.result;
}

var units=[ 'Length' , 'Area' , 'Volume' , 'Time' , 'Speed' , 'Mass' , 'Power' ];

var Length=[
['inch','.0254'],
['foot','.3048'],
['yard','.9144'],
['mile','1609.344'],
['nautical mile','1852'],
['fathom','1.82880365761'], 
['rod','5.02921005842'],
['chain','20.1168402337'],
['millimeter','.001'],
['centimeter','.01'],
['meter','1'],
['kilometer','1000']
]

var Area=[
['square meter','1'],
['square centimeter','.0001'],
['square yard','.83612736'],
['square feet','.09290304'],
['square inch','.00064516'],
['square kilometer','1000000'],
['acre','4046.87260987'],
['square mile','2589988.11034']
]

var Volume=[
['cubic meter','1'],
['cubic centimeter','.000001'],
['milliliter','.000001'],
['liter','.001'],
['cubic yard','.764554857984'],
['cubic feet','.028316846592'],
['cubic inch','.000016387064'],
['gallons','.003785411784'],
['quart','.000946352946'],
['pints','.000473176473'],
['fluid ounce','.0000295735295625'],
['tablespoon','.000014786747813'],
['teaspoon','.00000492892159375']
]

var Time=[
['second','1'],
['minute','60'],
['hour','3600'],
['day','86400'],
['week','604800'],
['year','31556925.9747']
]

var Speed=[
['meters/sec','1'],
['centimeters/sec','.01'],
['feet/sec','.3048'],
['kilometer/hour','.277777777778'],
['miles/hour','.44704'],
['knots','.514444444444'],
['C','299792458']
]

var Mass=[
['gram','1'],
['kilogram','1000'],
['ounce','28.349523125'],
['pound','453.59237'],
['slug','14593.9029372'],
['ton','907184.74']
]

var Power=[
['watts','1'],
['horsePower','745.699871582']
]

-->