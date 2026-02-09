import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let ai: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const getAIClient = (): GoogleGenAI => {
  if (!ai) {
    const apiKey = process.env.API_KEY || '';
    if (!apiKey) {
      console.warn("API_KEY is missing from environment variables.");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

export const initializeChat = async (): Promise<Chat> => {
  const client = getAIClient();
  // Using a model that supports system instructions well
  chatSession = client.chats.create({
    model: 'gemini-2.5-flash-latest', 
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
  return chatSession;
};

export const sendMessageStream = async function* (message: string) {
  if (!chatSession) {
    await initializeChat();
  }
  
  if (!chatSession) {
    throw new Error("Failed to initialize chat session");
  }

  try {
    const resultStream = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of resultStream) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    yield "抱歉，我现在无法连接到大脑（服务暂时不可用），请检查您的网络或稍后再试。";
  }
};
