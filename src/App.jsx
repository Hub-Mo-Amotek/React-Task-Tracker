import {useState} from "react";
import AddTask from "./components/AddTask"
import ToDo from "./components/ToDo"

function App() {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);
  return (
    <>
      <h1 className="text-3xl text-white font-bold py-6 pl-6">Task Tracker</h1>
      <div className="flex flex-row items-center">
      <p className="text-xl text-white pl-6">Click </p>
      <AddTask taskList={taskList} setTaskList={setTaskList}/>
      <p className="text-xl text-white my-2"> to add a new task!</p>
      </div>
      <div>
        <h2 className="ml-6 text-xl max-w-sm w-3/4 dont-semibold my-4 mx-6 py-2 px-2 bg-gray-300">To Do:</h2>
      {taskList.map((task) => 
      <ToDo key={task.id} task={task} taskList={taskList} setTaskList={setTaskList}/>
      )}
      </div>
    </>
  )
}

export default App
