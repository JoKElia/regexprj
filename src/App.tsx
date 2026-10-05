import { useState } from "react";

function App() {
    const [regex, setRegex] = useState("");
    return (
        <div>
            <h1>Regex Visualizer</h1>

            <input type="text" value={regex} onChange={(e) => setRegex(e.target.value)} />
            <p>{regex}</p>
        </div>
    );
}

export default App;