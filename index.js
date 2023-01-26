// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function joinWordsArray() {
  const arr = ['a', 'b', 'c','d','e','f','g','h','i','l','m','n','o','p','q','r','s','t','u','v','z']; 
  const join = arr.join(', '); 

  return join; 
}

const joined = joinWordsArray();
console.log('joined')
console.log(joined)