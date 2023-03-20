// import './App.css'
import app from './App.module.css'
import Block from '../Block/Block'

function App() {

    return(
        <div>
            {/* <div className='item'></div> */}
                <div className={`${app.item} ${app.yellow}`}>
                    123
                </div>
            <Block/>
        </div>
    )
}

export default App