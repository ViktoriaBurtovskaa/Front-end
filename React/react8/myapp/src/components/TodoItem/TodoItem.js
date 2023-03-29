import styles from './TodoItem.module.css'

function TodoItem(props) {

    const {id,title,completed, changeItemCompleted, deleteTodoItem} = props

    const item_styles = {
        backgroundColor: completed ? 'lightgreen' : 'red',
      }

  return (
    <div 
        className={styles.todo_elem} 
        style={item_styles} 
        onClick={() => changeItemCompleted(id)}
        onDoubleClick={() => deleteTodoItem(id)}
        >  
        <h2>{title}</h2>
        <p>{''+completed}</p>
    </div>
  )
}

export default TodoItem