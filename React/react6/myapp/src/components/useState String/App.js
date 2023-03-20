import { useState } from "react"
import './App.css'

function App() {

    let [color, setColor] = useState('red')
    let [size, setSize] = useState({width: 100, height: 100})

    const colorHandle = () => {
         setColor('blue')
    }

    const sizeHandle = () => {
        setSize({
            width: size.width + 100,
            height: size.height + 100,

        })
   }



  return (
    <div>
        <div 
            className={`item`} 
            style={{backgroundColor: color, width: size.width, height:size.height}}>
        </div>
        <button onClick={colorHandle}>Change color</button>
        <button onClick={sizeHandle}>Change size</button>
    </div>
  )
}

export default App