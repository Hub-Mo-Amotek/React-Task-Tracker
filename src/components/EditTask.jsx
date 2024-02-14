import { useEffect, useState } from "react"

const EditTask = ({task, taskList, setTaskList}) => {
    const [editModal, setEditModal] = useState(false)
    const [projectName, setProjectName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [editBtn, setEditBtn] = useState(true);

    useEffect(() => {
        setProjectName(task.projectName);
        setTaskDescription(task.taskDescription);
    }, [])

    const handleInput = e => {
    const {name, value} = e.target;

    if (name === "projectName") setProjectName(value)
    if (name === "taskDescription") setTaskDescription(value)
}
 
    const handleUpdate = e => {
    e.preventDefault();
    let taskIndex = taskList.indexOf(task);
    taskList.splice(taskIndex, 1);
    setTaskList(
        [...taskList, {projectName, taskDescription}]
    )
    setEditModal(false)
    setEditBtn(true)
}

const handleBtn = () => {
    setEditModal(true)
    setEditBtn(false)
}

    return (
        <>
        {editBtn ? (
          <button className="bg-gray-400 text-white text-sm-uppercase font-semibold py-1 px-2 rounded"
          onClick={handleBtn}
          display="none">Edit</button>
        ) : null}

                  {editModal ? (
                  <>
                    <div>
                <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
                    <div className="w-9/12 max-w-lg bg-white border rounded-lg shadow-md relative flex flex-col">
                    <div className="flex flex-row justify-between p-5 border ng-white">
                    <h3 className="bg-white text-3xl font-semibold">
                        Edit task
                    </h3>
                    <button className="px-1  text-red-400 float-right text-3xl leading-none font-semibold block" 
                            onClick={() => setEditModal(false)}>
                        x
                    </button>
                    </div >
                    <form className="p-6">
                        <div>
                            <label htmlFor="projectName" className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2">
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
                            <label className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2"  htmlFor="taskDescription">Task description</label>
                            <textarea 
                                className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 pc-4 mb-5 leading-tight focus:outline-none focus:bg-white" 
                                cols="30" 
                                rows="10" 
                                name="taskDescription"
                                id="taskDescription"
                                value={taskDescription}
                                onChange={handleInput}
                                placeholder=" Task description "></textarea>
                        </div>
                    </form>
                    <div className="flex justify-end p-6 border-t border-slate-200 rounded-b">
                        <button
                        className="bg-blue-500 text-white font-semibold uppercase text-sm px-6 py-3 rounded hover:opacity-70"
                        type="submit"
                        onClick={(e) => handleUpdate(e)}
                        >
                            Update
                        </button>
                    </div>
                    </div>
                </div>
            </div>
                  </>
                  ) : null}
        </>
    )
}

export default EditTask