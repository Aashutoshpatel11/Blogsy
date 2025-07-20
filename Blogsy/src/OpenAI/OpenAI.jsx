import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export class OpenAI{

  async generate_response(text){ 
    try {
      const response = await generateText({
        model: openai("o3-mini"),
        prompt: text
      })
      if(response) return response;
    } catch (error) {
      console.log("Error::generate_response::", error);
      
    }
    return null
  }

}

const openAI = new OpenAI();

export default openAI;