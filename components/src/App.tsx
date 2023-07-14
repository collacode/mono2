import './App.css';

import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="">
                <h1>Vite + React</h1>
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                </div>
                <p className="read-the-docs">Hello World</p>
            </div>
        </>
    );
}

export default App;
