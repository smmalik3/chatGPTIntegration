import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-TUmjMabN24otMenoRErJqzxD",
    apiKey: 'enter key here'
    // apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();


// curl https://api.openai.com/v1/chat/completions \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer enter key here" \
//   -d '{
//      "model": "gpt-3.5-turbo",
//      "messages": [{"role": "user", "content": "Say this is a test!"}],
//      "temperature": 0.7
//    }'