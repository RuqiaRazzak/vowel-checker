function checkVowels() {
  let inputText = document.getElementById('inputText').value;
  let errorDiv = document.getElementById('error');
  let countDiv = document.getElementById('totalCount');
  let vowelWords = document.getElementById('vowelWords');
  errorDiv.textContent = '';
  countDiv.textContent = '';
  vowelWords.textContent = '';
 

  if (!inputText) {
    errorDiv.textContent = 'Please enter some text.';
   }
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let count = 0;

  for (let i = 0; i < inputText.length; i++) {
     if (vowels.includes(inputText[i])) {
      count++;
     }
    
  }

  // for (let i = 0; i < inputText.length; i++) {
  //   if (vowels.includes(inputText[i])) {
  //    count++;
   
  //   }
      
      vowelWords.textContent = "Total words with vowels:" + inputText;
      countDiv.textContent ="Words with vowels: "  + count;
  
  inputText.focus();
 
    }

function clearInput() {
  document.getElementById('inputText').value = '';
  document.getElementById('totalCount').textContent = '';
  document.getElementById('vowelWords').textContent = '';
}





  
  
