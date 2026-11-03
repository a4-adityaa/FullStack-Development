
import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Who invented the television?",
    config: {
        systemInstruction: "You are a helpful general knowledge expert."
    }
});


console.log(response.text)