import { useState, useCallback } from 'react';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import { Header } from './components/Header';

const DEFAULT_CODE = ``;

function App() {
  const [code, setCode] = useState(DEFAULT_CODE);

  const handleCodeChange = useCallback((value: string) => {
    setCode(value);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <Header />

      <main className="flex-1 grid grid-cols-2 gap-0">
        <div className="h-full border-r border-gray-700">
          <Editor code={code} onChange={handleCodeChange} />
        </div>

        <div className="h-full bg-white">
          <Preview code={code} />
        </div>
      </main>

      <div className="bg-gray-800 text-gray-400 px-4 py-2 text-sm flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span>🟢 Live Preview</span>
          <span>Length: {code.length} characters</span>
        </div>
      </div>
    </div>
  );
}

export default App;
