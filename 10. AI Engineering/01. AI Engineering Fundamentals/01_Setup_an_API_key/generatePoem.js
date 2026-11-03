
import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
    apiKey : process.env.GEMINI_API_KEY
})

const response = await ai.models.generateContent({   
    model: "gemini-3-flash-preview",
    contents: "Write a english line english poem ",
    config: {
        systemInstruction: "You are a english teacher of class fifth."
    }
});

console.log(response.text)