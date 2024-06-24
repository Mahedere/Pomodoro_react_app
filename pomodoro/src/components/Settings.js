import { useContext } from 'react';
import ReactSlider from 'react-slider';
import SettingsContext from './SettingsContext';
import BackButton from './BackButton';
function Settings() {
  const settingsInfo=useContext(SettingsContext);
    return (
        <div style={{ textAlign: 'left' }}>

            <label>Work:{settingsInfo.workMinutes}:00</label>
            <ReactSlider className={'slider'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingsInfo.workMinutes}
            onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={120}/>
            <label>break:{settingsInfo.breakMinutes}:00</label>
            <ReactSlider className={'slider green'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingsInfo.breakMinutes}
            onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
            min={1}
            max={120}/>
           <BackButton/>
        </div>
    )
}

export default Settings