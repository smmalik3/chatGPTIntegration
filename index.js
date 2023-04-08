const {Configuration,OpenAIApi} = require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion() {
    const userPrompt = "Can you create a job description for a Software Engineer working at Deloitte Digital with 3 years experience?"
    console.log('USER PROMPT LENGTH ---> ' + userPrompt.length)
    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        temperature: 0.5,
        max_tokens: 2048,
        frequency_penalty: 0.5,
        presence_penalty: 0,
        prompt: userPrompt,
    });
    console.log(completion.data.choices[0].text);
    console.log(completion.data)
    response = completion.data.choices[0].text
    chatGPTResponse(response)
}

runCompletion();

function chatGPTResponse(response) {
    console.log('This is the response from ChatGPT: ' + response)
}