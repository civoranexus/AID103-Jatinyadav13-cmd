"use client";

import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("No analysis yet");

  async function handleImageUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch("http://localhost:5000/api/crop/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.message);
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>🌱 CropGuard</h1>
      <p>AI-powered Crop Disease Detection</p>

      <input type="file" onChange={handleImageUpload} />

      <h3 style={{ marginTop: "20px" }}>Result</h3>
      <p>{result}</p>
    </main>
  );
}
