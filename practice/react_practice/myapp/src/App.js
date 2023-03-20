import User from './components/User'
import {data} from './data/users'
import {tasks} from './data/tasks'
import Task from './components/Task';


function App() {

  return ( 
  <div>
      {/* {
        data.map(el => <User key={el.id} {...el}/>)
      } */}
      {
        tasks.map(el => <Task key={el.id} {...el}/>)
      }
  </div>
  );
}

export default App;