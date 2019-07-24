// Implement a harmlessRansomNote function() in JS

function harmlessRansomNote(noteText,magazineText)
{
var magazineTextArr = magazineText.split(' ');
var noteTextArr = noteText.split(' ');

 var magazineObject = {};


// Iterate through the magazineTextArr array

magazineTextArr.forEach(word => {
  if(!magazineObject[word])
  {
    magazineObject[word] = 0;
  }
 
    magazineObject[word]++;
  
})

// console.log(magazineObject);

var noteIsPossible = true;

noteTextArr.forEach(word => {
  if(magazineObject[word])
  {
    magazineObject[word]--;
    if(magazineObject[word]<0)
    {
      noteIsPossible = false;
    }
  }
  else
  {
    noteIsPossible = false;
  }
})
return noteIsPossible;
}

harmlessRansomNote('world','say hello to my little friend hello the world is yours');

/*
harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');
*/
