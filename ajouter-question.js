document.getElementById('add-proposition').addEventListener('click', () => {

  const container = document.createElement('div');

  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  
  const inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.placeholder = 'Texte de la proposition';
  inputText.required = true;

  
  container.appendChild(checkbox);
  container.appendChild(inputText);

 
  document.getElementById('propositions').appendChild(container);
});