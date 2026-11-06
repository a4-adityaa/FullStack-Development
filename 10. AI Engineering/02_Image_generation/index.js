import { GoogleGenAI } from '@google/genai'

const outputImg = document.getElementById('output-img')
const status = document.getElementById('status')
const submitBtn = document.getElementById('submit-btn')

const geminiAi = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY
})

document.getElementById('image-form').addEventListener('submit', async (event) => {
    event.preventDefault()
    const prompt = document.getElementById('instruction').value
    submitBtn.disabled = true
    status.textContent = 'Generating...'

    try {
        const response = await geminiAi.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: prompt,
            config: {
                responseModalities: ['TEXT', 'IMAGE']
            }
        })

        const image = response.candidates?.[0]?.content?.parts?.find(part => part.inlineData)
        if (!image) {
            throw new Error('Gemini did not return an image.')
        }

        outputImg.innerHTML = `<img src="data:${image.inlineData.mimeType};base64,${image.inlineData.data}" alt="${prompt}">`
        status.textContent = 'Ready'
    } catch (error) {
        console.error(error)
        status.textContent = error.status === 429 || error.message?.includes('"code":429')
            ? 'Gemini quota exhausted. Check billing/quota.'
            : error.message || 'Image generation failed.'
    } finally {
        submitBtn.disabled = false
    }
})
