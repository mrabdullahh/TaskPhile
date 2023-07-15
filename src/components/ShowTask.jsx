export default function Showtask({taskList, setTaskList}) {

  return (
    <section className="showTask">
      <p className="head">
        <span>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </span>
        <span className="clearAll" onClick={() => setTaskList([])}>
          Clear All
          </span>
      </p>
      <ul>
        {taskList.map((task) => (
        <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i className="bi bi-pencil-square"></i>
            <i className="bi bi-trash"></i>
            <i></i>
          </li>)
        )}

      </ul>


    </section>
  )
}
