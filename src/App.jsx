import { useState } from 'react'
import './App.css'
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: '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' });

function App() {
  const [count, setCount] = useState(0)


  const main = async () => {
    const completion = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: "Say this is a test.",
      max_tokens: 7,
      temperature: 0,
    });

    console.log(completion);
    console.log(completion.choices[0].text);
  }
  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => main()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
