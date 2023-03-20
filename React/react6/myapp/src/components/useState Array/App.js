import { useState } from "react"
import UserInfo from "./UserInfo"

function App() {

    const data = [
        {id: 1 , name: 'Alex', salary: 1500},
        {id: 2 , name: 'Steven', salary: 2000},
        {id: 3 , name: 'Neena', salary: 1000},
        {id: 4 , name: 'John', salary: 4500},
        {id: 5 , name: 'King', salary: 400},
    ]

    let [users, setUsers] = useState(data)
   
    const addEmplHandle = () => {

        let newUser = {
            id: Date.now(), 
            name: prompt(), 
            salary: prompt()}

        setUsers([...users, newUser])
    }

    const removeLastEpmlHandle = () => {
        let newUsers = users.slice()
        newUsers.pop()
        setUsers([...newUsers])
    }

    const addSalaryEmpHandle = () => {
        let newUsers = [...users]
        newUsers.forEach(el => el.salary = Math.round(el.salary * 1.1))
        setUsers([...newUsers])
    }

  return (
    <div>
        <div>
            <button onClick={addEmplHandle}>Add user</button>
            <button onClick={removeLastEpmlHandle}>Delete last user</button>
            <button onClick={addSalaryEmpHandle}>Increase salary by 10%</button>

        </div>
    
        <div>
        {users.map(el => <UserInfo key={el.id} name={el.name} salary={el.salary} />)}
        </div>

    </div>
  )
}

export default App

// Задание: используя метод map развернуть 5 компонентов userInfo, передав пропы: name, salary

// userInfo разметка: 
{/* <div>
    <h2>name</h2>
    <p>salary</p>
</div> */}
// Задание: сформировать кнопку, которая должна будет удалить последний элемент массива 