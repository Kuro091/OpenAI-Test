import { OpenAIStream, StreamingTextResponse } from 'ai';
import { openai } from '@/lib/openAi';
 
// Create an OpenAI API client (that's edge friendly!)

 
// Set the runtime to edge for best performance
export const runtime = 'edge';
 
export async function POST(req: Request) {
  const { prompt, context } = await req.json();

// convert context, which is an object, to string
  const contextString = JSON.stringify(context);
  // remove all linebreaks

  console.log('contextString', contextString.replaceAll("\n", ""))

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.completions.create({
    model: 'text-davinci-003',
    stream: true,
    temperature: 0.2,
    n: 1,
    stop: ['END OF THE QUESTION.'],
    max_tokens: 300,
    prompt: `With the context of our conversation being ${contextString.replaceAll("\n", "")}, please answer this in a tldr kind of way: ${prompt}.
    Don't try to finish my previous sentence. Just answer the question.
    `,
  });


  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}