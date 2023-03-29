import { useEffect, useState } from "react";
import AddItem from "./components/AddItem/AddItem";
import TodoList from "./components/TodoList/TodoList";

function App() {

  const start_todos = [
    {id: 1, title: 'Первая задача', completed: true},
    {id: 2, title: 'Вторая задача', completed: false},
    {id: 3, title: 'Третья задача', completed: false},
  ]

  let [todos, setTodos] = useState(start_todos)

  const addTodo = title => {
    const todo = {
      id: Math.max(...todos.map(elem => elem.id)) + 1,
      title: title,
      completed: false
    }
    setTodos([todo, ...todos])
  }

  // 1 Задание: 
  // Используя проп complited, сформируйте цвет background оп следующему правилу
  // Если complited true - тогда цвет фона должен быть зеленой
  // В противном случае красный

 // 2 задание:
  // Напишите функцию, которая будет меня сво-во complited (с true на false, false на true) 
  // по клику на элемент

  // 3 Задание:
  // Напишите функцию, которая по двойному клику на элемент его удалит
  const changeItemCompleted = (id) => {
    let newTodos = todos.map(elem => {
        if (id === elem.id) {
            elem.completed = !elem.completed
        } 
        return elem
    })
    setTodos(newTodos)
}

const deleteTodoItem = (id) => {
  let newTodos = todos.filter(elem => id != elem.id )
  setTodos(newTodos)
}

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  useEffect(() => {
    let todosItem = JSON.parse(localStorage.getItem('todos'))
    setTodos(todosItem)
  }, [])

  return (
    <div>
      <AddItem addTodo={addTodo}/>
      <TodoList todos={todos} changeItemCompleted={changeItemCompleted} deleteTodoItem={deleteTodoItem} />
    </div>
  );
}

export default App;
