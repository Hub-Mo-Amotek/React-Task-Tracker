import {useState} from "react";

const AddTask = (taskList, setTaskList) => {
const [addModal, setAddModal] = useState(false)
const [projectName, setProjectName] = useState("");
const [taskDescription, setTaskDescription] = useState("");

const handleInput = e => {
    const {name, value} = e.target;

    if (name === "projectName") setProjectName(value)
    if (name === "taskDescription") setTaskDescription(value)
}
 
const handleAdd = e => {
    e.preventDefault();
    setTaskList(
        [...taskList, {projectName, taskDescription}]
    )
    setAddModal(false)
    setProjectName("");
    setTaskDescription("");
}
  return (
    <div>
      <button 
        className="mx-2.5 bg-blue-500 text-white uppercase text-sm font-semibold py-1 pl-2 pr-2.5 rounded hover:opacity-70 "
        type="button"
        onClick={() => setAddModal(true)}>+</button>
        {addModal ? (
            <>
            <div>
                <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
                    <div className="w-9/12 max-w-lg bg-white border rounded-lg shadow-md relative flex flex-col">
                    <div className="flex flex-row justify-between p-5 border ng-white">
                    <h3 className="bg-white text-3xl font-semibold">
                        Add a task
                    </h3>
                    <button className="px-1  text-red-400 float-right text-3xl leading-none font-semibold block" 
                            onClick={() => setAddModal(false)}>
                        x
                    </button>
                    </div >
                    <form className="p-6">
                        <div>
                            <label htmlFor="project-name" className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2">
                                Project name
                            </label>
                            <input type="text"
                                className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 pc-4 mb-5 leading-tight focus:outline-none focus:bg-white"
                                id="projectName"
                                name="projectName"
                                value={projectName}
                                onChange={handleInput}
                                placeholder=" Project name"
                                required
                            />
                        </div>
                        <div>
                            <label className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2"  htmlFor="tas-description">Task description</label>
                            <textarea 
                                className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 pc-4 mb-5 leading-tight focus:outline-none focus:bg-white" 
                                cols="30" 
                                rows="10" 
                                name="taskDescription"
                                value={taskDescription}
                                onChange={handleInput}
                                placeholder=" Task description "></textarea>
                        </div>
                    </form>
                    <div className="flex justify-end m-2">
                        <button
                        className="bg-blue-500 text-white font-semibold uppercase text-sm px-6 py-3 rounded hover:opacity-70"
                        onClick={() => handleAdd()}
                        >
                            Add task
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            </>
        ) : null}
    </div>
  )
}

export default AddTask

