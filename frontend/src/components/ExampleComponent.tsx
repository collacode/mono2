import { useState } from 'react';

export const ExampleComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <main className="w-screen">
            <button onClick={() => setCount((count) => count + 1)}>add</button>
            <div>count: {count}</div>
        </main>
    );
};
