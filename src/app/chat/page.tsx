"use client";
import { useEffect, useState } from "react";
import NavBar from "../../../components/NavBar";
import Seo from "../../../components/Seo";

export default function Chat() {
  const OPENAI_API_KEY = "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";

  const [prompt, setPrompt] = useState("");
  const [chatRes, setChatRes] = useState("");

  const sendPrompt = async () => {
    try {
      const res = await fetch(
        "https://api.openai.com/v1/engines/davinci/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            prompt,
            max_tokens: 50,
            temperature: 1,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ["\n"],
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      setChatRes(data.choices[0].text);
    } catch (err) {
      console.log(err);
      setChatRes(`Error: ${err}`);
    }
  };

  return (
    <div>
      <Seo title="Chat" />
      <NavBar />
      <h1>Chat</h1>
      <input value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button onClick={sendPrompt}>Send</button>
      <p>{chatRes}</p>
      <style jsx>{`
        input {
          width: 100%;
          height: 60px;
          font-size: 24px;
          padding: 0 20px;
        }
        button {
          width: 100%;
          height: 60px;
          font-size: 24px;
          background-color: tomato;
          color: #fff;
          border: 0;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
