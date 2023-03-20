export default function Task({title,completed}) {
    const status = completed ? 'done' : 'not done'
    return (
        <div>
          <p>Title: { title }</p>
          <p>Status: {status}</p>
        </div>
      )
}