import './App.css';
import Settings from './components/Settings.js';
import Timer from './components/Timer.js'
import { useState  } from 'react';
function App() {
  const [showSettings,setShowSettings]=useState(false);
  return (
    <main> 
    {  showSettings ? <Settings/> : <Timer/>}
 
       </main>
  )
}

export default App;
