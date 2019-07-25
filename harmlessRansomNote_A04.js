function harmlessRansomNote(noteText,magazineText)
{
	var noteTextArr = noteText.split(' ');
	var magazineTextArr = magazineText.split(' ');
	var magazineTextObj = {};
	
	magazineTextArr.forEach( word => {
		if(!magazineTextObj[word]) {magazineTextObj[word]=0;}
		magazineTextObj[word]++;
	})
//console.log(magazineTextObj);

	var noteIsPossible = true;
	noteTextArr.forEach( word => {
	if(magazineTextObj[word]) 
	{
		magazineTextObj[word]--;
		if(magazineTextObj[word]<0)
		{
			noteIsPossible=false;
		}
	
	}
	else
	{
		noteIsPossible = false;
	}
	
	})
return noteIsPossible;
}
	


harmlessRansomNote('hello world','hello world say hello to my little friend the world is yours');

