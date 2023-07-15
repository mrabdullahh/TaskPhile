export default function AddTask({taskList, setTaskList}) {

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    const newTask ={
      id: date.getTime(),
      name : e.target.task.value,
      time : `${date.toLocaleTimeString()}${date.toLocaleDateString()}`
    }
    // console.log("new Task", newTask);
    setTaskList([...taskList, newTask]);
    e.target.task.value = '';
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="add task" autoComplete="off"></input>
        <button type="submit">Add</button>
      </form>
    </section>
  )
}
