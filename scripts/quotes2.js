<!--


// Jon's Install Directions
// Copy the tag below to link to the java file.
// Place in the Body tags of the document
// Remember to verify the url to the script
// This script places a random quote each time the browser is reloaded.
// <!--Random Quote--><script language=JavaScript src="quotes.js" type="text/javascript"></script>
// Install the code below in the location you want the quote to show up on youe page.
// <script language="javascript">
// <!--
// document.write(rancon[rannum]);
// //-->
// </script>


//Script by Matt Stanton 2002
//http://members.tripod.com/matt_stanton/
//cyberefl@email.com

var rancon = new Array();

rancon[0] = "Integrity is doing the right, even if nobody is watching.<br>\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;<font color=red>Jim Stovall</font>";
rancon[1] = "Hard work never killed anybody, but why take the chance?<br>\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;<font color=red>Edgar Bergen</font>";
rancon[2] = "One who condones evils is just as guilty as the one who perpetrates it.<br>\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;<font color=red>Dr. Martin Luthor King Jr.</font>";
rancon[3] = "Courage is being scared to death - but saddling up anyway.<br>\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;<font color=red>John Wayne</font>";
rancon[4] = "History teaches that wars begin when governments believe the price of aggression is cheap.<br>\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;<font color=red>Ronald Reagan</font>";
rancon[5] = "A government that is big enough to give you all you want is big enough to take it all away.<br>\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;<font color=red>Barry Goldwater</font>";
rancon[6] = "The nine most terrifying words in the English language are\:<br><font color=blue>&quot;</font> I'm from the government and I'm here to help <font color=blue>&quot;</font>.<br>\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;<font color=red>Ronald Reagan</font>";
rancon[7] = "The only thing necessary for the triumph of evil is for good men to do nothing.<br>\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;<font color=red>Edmund Burke</font>";
rancon[8] = "It is easier to fight for one's principles than to live up to them.<br>\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;<font color=red>Alfred Adler</font>";
rancon[9] = "Courage is fear that has said its prayers.<br>\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;<font color=red>Dorothy Bernard</font>";

var rannum = Math.floor(Math.random()*rancon.length);





document.write(rancon[rannum]);
//-->