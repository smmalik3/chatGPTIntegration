# chatGPTIntegration
Chat GPT Integration

# ChatGPT Reference Guide

## ChatGPT Models
The ChatGPT API offers several models with different capabilities and sizes, which can be selected by specifying the "model" parameter in your API request. Some of the available models and their corresponding model names are:

- **text-davinci-002**: A version of GPT-3 with 1.2 billion parameters that provides strong performance on a wide range of language tasks, including text completion, summarization, and conversation.
- **text-davinci-003**: A more recent version of GPT-3 with 175 billion parameters that offers state-of-the-art performance on many language tasks, including natural language understanding, language translation, and question-answering.
- **text-curie-001**: A smaller version of GPT-3 with 6.7 billion parameters that provides good performance on a variety of language tasks, such as language modeling, text generation, and conversation.
- **text-babbage-001**: A smaller version of GPT-3 with 1.5 billion parameters that is well-suited for simpler language tasks, such as text completion and summarization.
- **text-ada-001**: A version of GPT-3 that has been fine-tuned for better performance on tasks that require coherent and contextually appropriate responses, such as conversation and storytelling.


To change the value of the "model" parameter, you simply need to specify the name of the desired model in your API request. For example, to use the text-curie-001 model instead of the default text-davinci-003 model, you would set the "model" parameter to "text-curie-001" in your API request.

Example Code:

```js filename="chatGPT.js" {13} copy
const {Configuration,OpenAIApi} = require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, //Your chatGPT API key should be stored in a .env file in your apps root directory
});

const openai = new OpenAIApi(configuration);

async function runCompletion() {
    const userPrompt = "Can you create a job description for a Software Engineer working at Deloitte Digital with 3 years experience?"
    const completion = await openai.createCompletion({
        model: "text-ada-001", //EDIT THIS LINE TO CHANGE THE CHAT GPT MODEL
        max_tokens: 2000, //Each model will have a different token limit, adjust this value accordingly
        prompt: userPrompt,
    });
  
    console.log(completion.data.choices[0].text);
}

runCompletion();
```