import './App.css';
import Settings from './components/Settings.js';
import SettingsContext from './components/SettingsContext.js';
import Timer from './components/Timer.js'
import { useState } from 'react';
function App() {
  const [showSettings, setShowSettings] = useState(true);
  return (
    <main>
      <SettingsContext.Provider value={{
        workMinutes:45,
        breakMinutes:15,
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  )
}

export default App;
