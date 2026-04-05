import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Frontend OK 🚀</h1>
      <p>Backend response :</p>
      <p>{message}</p>
    </div>
  );
}

export default App;