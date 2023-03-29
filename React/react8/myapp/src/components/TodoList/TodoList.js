import TodoItem from '../TodoItem/TodoItem'
import styles from './TodoList.module.css'

function TodoList(props) {
    const {todos, changeItemCompleted, deleteTodoItem} = props

  return (
    <div className={styles.todos_wrapper}>
        {
            todos.map(elem => 
                        <TodoItem 
                        key={elem.id}
                        id={elem.id}
                        title={elem.title}
                        completed={elem.completed}
                        changeItemCompleted={changeItemCompleted}
                        deleteTodoItem={deleteTodoItem}
                        />)
        }
    </div>
  )
}

export default TodoList