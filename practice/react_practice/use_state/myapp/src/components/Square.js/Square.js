import React, { useState } from 'react'

function Square() {

    // const square_styles = {
    //     background: 'green',
    //     size: 300
    // }

    let [ squareStyles, setSquareStyles ] = useState(false)

    // const styles = {
    //     backgroundColor: squareStyles.background,
    //     width: squareStyles.size + 'px',
    //     height:  squareStyles.size + 'px'
    // }

    // const change_styles = () => {
    //     setSquareStyles(squareStyles.background = 'blue');
    //     setSquareStyles(squareStyles.size = 400)
    // }

    const styles = {
        backgroundColor: squareStyles ? 'blue' : 'green',
        width: squareStyles ? '400px' : '300px',
        height: squareStyles ? '400px' : '300px'
    }

    const change_styles = () => {
        setSquareStyles(squareStyles = !squareStyles);
    }
  
  return (
    <div>
        <div style={styles}></div>
        <button onClick={change_styles}>Change square</button>
    </div>
  )
}

export default Square