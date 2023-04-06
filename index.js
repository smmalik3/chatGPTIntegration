const axios = require('axios');

const prompt = 'Hello, how are you?';
const model = 'text-davinci-002';

axios.post('https://api.openai.com/v1/engines/'+model+'/completions', {
  prompt: prompt,
  max_tokens: 100,
  n: 1,
  stop: null,
  temperature: 0.5,
}, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'enter key here'
  }
})
.then((response) => {
  console.log(response.data.choices[0].text);
})
.catch((error) => {
  console.error(error);
});
