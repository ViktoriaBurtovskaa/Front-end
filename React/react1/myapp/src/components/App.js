import Content from "./Content"
import ContentDone from "./ContentDone"

function App() {
    return (
      <div>
      <h1> Tasks</h1>
          <ContentDone/>
          <ContentDone/>
          <Content/>
          <ContentDone/>
      </div>
    )
  }

export default App