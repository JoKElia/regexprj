import { useState } from "react";

function App() {
    const [regex, setRegex] = useState("");
    const [teststring, setTeststring] = useState("");

    let isMatch = false;
    try {
        const regexObj = new RegExp(regex);
        isMatch = regexObj.test(teststring);
    } catch {
        isMatch = false;
    }
    return (
        <div>
            <h1>Regex Visualizer</h1>

            <input type="text" value={regex} onChange={(e) => setRegex(e.target.value)} />
            <p>{regex}</p>
            <h1>Test String</h1>
            <input type="text" value={teststring} onChange={(e) => setTeststring(e.target.value)} />
            <p>{teststring}</p>
            <h2>{isMatch ? "Match found!" : "No match found."}</h2>
        </div>
    );
}

export default App;