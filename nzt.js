const text = 'HI WE ARE NZT COMMUNITY WELCOME';
const syllables = text.split(' ');
let currentSyllableIndex = 0; 

function changeText() {
  console.clear(); 
  const currentSyllable = syllables[currentSyllableIndex];
  console.log(currentSyllable); 
  currentSyllableIndex = (currentSyllableIndex + 1) % syllables.length; 
  setTimeout(changeText, 2000); 
}

changeText();
