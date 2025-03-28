const { OpenAI } = require("openai");

const baseURL = "https://api.aimlapi.com/v1";

// Insert your AIML API Key in the quotation marks instead of my_key:
const apiKey = "c782dcd69b0f4cf98773da21640870dd"; 

const systemPrompt = "You are a travel agent. Be descriptive and helpful";
const userPrompt = "how to write Hello world in C++";

const api = new OpenAI({
  apiKey,
  baseURL,
});

const main = async () => {
  const completion = await api.chat.completions.create({
    model: "mistralai/Mistral-7B-Instruct-v0.2",
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],
    temperature: 0.7,
    max_tokens: 256,
  });

  const response = completion.choices[0].message.content;

  console.log("User:", userPrompt);
  console.log("AI:", response);
};

main();