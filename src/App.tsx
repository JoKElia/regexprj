import { useState } from "react";

function App() {
    const [regex, setRegex] = useState("");

    return (
        <div>
            <h1>Regex Builder</h1>

            <input
                type="text"
                placeholder="Enter regex..."
                value={regex}
                onChange={(e) => setRegex(e.target.value)}
            />

            <p>You entered:</p>
            <code>{regex}</code>
        </div>
    );
}

export default App;