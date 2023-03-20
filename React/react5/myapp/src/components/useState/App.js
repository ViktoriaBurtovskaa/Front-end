import { useState } from "react"

function App() {

    // const [state, setState] = useState()

    // state - состояние, которое передает любые данные
    // useState это функция которая перезаписывает  и заставляет компонент обновиться

    //Правило нейминга
    //post setPost
    // product setProduct

    let [count, setCount] = useState(0)

    const handle = () => {
        setCount(++count)
    }

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={handle}>Click!</button>
    </div>
  )
}

export default App