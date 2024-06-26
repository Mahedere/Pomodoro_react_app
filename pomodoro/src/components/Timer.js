import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";
import './slider.css'
import { useContext, useState, useEffect, useRef } from "react";
import SettingsContext from "./SettingsContext";
const red = '#f54e4e';
const green = '#4aec8c';

function Timer() {
  const settingsInfo = useContext(SettingsContext)
  const [isPaused, setIsPaused] = useState(true)
  const isPausedRef = useRef(isPaused)
  const [mode, setMode] = useState('work')
  const modeRef = useRef(mode)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const secondsLeftRef = useRef(secondsLeft)
  function plat() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current)

  }
  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;
      setMode(nextMode)
      modeRef.current = nextMode
      setSecondsLeft(nextSeconds)
      secondsLeftRef.current = nextSeconds
    }
    secondsLeftRef.current = settingsInfo.workMinutes * 60
    setSecondsLeft(secondsLeftRef.current)
    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      plat();
    }, 1000)
    return () => clearInterval(interval)
  }, [settingsInfo])
  // const totalSeconds = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes*60
  return (
    <div>
      <CircularProgressbar
        value={60}
        text={"60%"}
        styles={buildStyles({
          rotation: 0.0,
          strokeLinecap: 'butt',
          textColor: '#fff',
          pathColor: red,
          trailColor: 'rgba(255,255,255,.2)',
        })}
      />
      <div style={{ marginTop: '20px' }}>
        {isPaused ?
          <PlayButton onClick={() => { setIsPaused(false); isPausedRef.current = false; }} />
          : <PauseButton onClick={() => { setIsPaused(false); isPausedRef.current = true; }} />}
      </div>
      <div style={{ marginTop: '20px' }}>
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  );
}

export default Timer;
