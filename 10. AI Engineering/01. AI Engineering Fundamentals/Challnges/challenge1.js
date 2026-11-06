
import 'dotenv/config'
import { GoogleGenAI } from '@google/genai'

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})

const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: 'Explain about Qunatum computing in 100 words.',
    config: {
        systemInstruction: "You are a college professor at MIT"
    }
})

console.log(response.text)