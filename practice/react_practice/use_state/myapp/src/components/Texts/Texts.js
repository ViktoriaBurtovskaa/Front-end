import { useState } from "react"

function Texts() {

    let [colored, setColored] = useState(true);

    
    const text_style = {
        color: colored ? 'red' : 'black'
    }

    const change_color = () => {
        setColored(colored = !colored)
        console.log(colored);
    };

  return (
    <div>
        <p style={text_style}>llllllllllllllllllllllllllllllllllllllllllllllllllllll</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <button onClick={change_color}>Change color</button>
    </div>
  )
}

export default Texts 