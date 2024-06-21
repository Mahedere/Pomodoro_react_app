 import { CircularProgressbar ,buildStyles} from "react-circular-progressbar"
 import 'react-circular-progressbar/dist/styles.css'

function Timer (){
  return (
    <div>
        <CircularProgressbar value={60} text={"60%"}/>
    </div>
  )
}

export default Timer