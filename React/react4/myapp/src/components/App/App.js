import Block from "../Block/Block"
import Content from "../Content/Content"

// function App() {
//     return(
//         <div>
//             <Block title='Title 1' text='Text 1' color={'purple'} size={'l'} isRead={false}/>
//             <Block title='Title 2' text='Text 2 ' color={'pink'} size={'m'}  isRead={false}/>
//             <Block title='Title 3' text='Text 3' color={'lightgreen'} size={'xl'}  isRead={true}/>
//         <Content/>
//         </div>
//     )
// }

// export default App

function App() {
    return(
        <div>
            <Content color={'green'} discount_price={1000} price={1500}/>
            <Content color={'blue'} discount_price={2000} price={2200}/>
            <Content color={'yellow'} discount_price={400} price={900}/>
        </div>
    )
}

export default App