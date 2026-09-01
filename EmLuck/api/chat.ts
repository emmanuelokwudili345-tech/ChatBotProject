import OpenAI from "openai";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await openai.responses.create({
      model: "gpt-5.6-luna",
      input: message,
    });

    return res.status(200).json({
      message: response.output_text,
    });
  } catch (error) {
    console.error("OpenAI API error:", error);

    return res.status(500).json({
      error: "Something went wrong",
    });
  }
}