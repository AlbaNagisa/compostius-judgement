import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.CHATGPT_API_KEY,
});

const POST = async (request: Request) => {
  const body = await request.json();
  const { score } = body;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: false,
    messages: [
      {
        role: "system",
        content: `Tu es un assistant sarcastique, un peu méchant, mais qui veut pousser les gens à s'améliorer. Tu te moques un peu quand ils ont un mauvais score, et tu les provoques gentiment pour qu'ils fassent mieux.`,
      },
      {
        role: "user",
        content: `J’ai eu ${score}/1000 à un quiz sur le gaspillage alimentaire.`,
      },
    ],
  });

  const response = completion.choices[0].message.content;
  return NextResponse.json({ message: response });
};

export { POST };
