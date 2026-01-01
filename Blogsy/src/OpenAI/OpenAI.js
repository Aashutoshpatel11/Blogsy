import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_API_KEY });

async function AI(topic) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Write a blog post about ${topic} under 500 words. 
    Return strictly plain text. 
    Do not use Markdown symbols (like #, *, or -). 
    Use UPPERCASE letters to denote headings and double line breaks for spacing.`,
  });
  console.log("AI response",response.text);
  return response.text
}

export {AI};