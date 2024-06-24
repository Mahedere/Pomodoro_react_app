import './App.css';
import Settings from './components/Settings.js';
import SettingsContext from './components/SettingsContext.js';
import Timer from './components/Timer.js'
import { useState } from 'react';
function App() {
  const [showSettings, setShowSettings] = useState(true);
  return (
    <main>
    
      {showSettings ? <Settings /> : <Timer />}

    </main>
  )
}

export default App;
