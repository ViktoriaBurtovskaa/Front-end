// 1) Правило JSX: внутри разметки необходимо указать {} для того, чтобы учесть JS ВЫРАЖЕНИЕ

// function App(props) {

//     const name = 'Viktoriia'
//     let a = 100

//     return(
//         <div className={(a < 50) ? 'true' : 'false'}>
//             {`name ${name}  ${(10 == 10) ? 10 : 0}`}
//         </div>
//     )
// }


// export default App;

// -----------------------------------------------------------------------
// 2) Правило: в любом месте можно перейти из JS в HTML и обратно
//      для перехода из HTML в JS необходимо указать {} (1 правило)
//      для перехода из JS в HTML ничего указывать не нужно

function App() {

   const a = 100

    return(
        <div>
        <div>
            {(a === 100) ? <p>{a}</p> : <h1>Headline</h1>}
        </div>
        <div>
{/* если булевое значение тру= тогда появлятся разметка, если фолс - разметки нт  */}
        {a === 100 && <p>a = 100</p>}
        </div>
    </div>
    )
}

export default App;