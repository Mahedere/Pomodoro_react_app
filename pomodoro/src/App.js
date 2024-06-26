import './App.css';
import Settings from './components/Settings.js';
import SettingsContext from './components/SettingsContext.js';
import Timer from './components/Timer.js'
import { useState } from 'react';
function App() {
  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes,setWorkMinutes]=useState(45);
  const [breakMinutes,setBreakMinutes]=useState(15);
  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  )
}

export default App;
