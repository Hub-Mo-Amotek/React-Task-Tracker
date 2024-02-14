import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

const ToDo = ({task, index, taskList, setTaskList}) => {

    return (
        <>
            <div className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-sm">
                <div className="w-full flex flex-row justify-between">
                    <p className="font-semibold text-xl">{task.projectName}</p>
                    <EditTask task={task} index={index} taskList={taskList} setTaskList={setTaskList}/>
                </div>
                <p className="text-lg py-2">{task.taskDescription}</p>
                <DeleteTask task={task} taskList={taskList} setTaskList={setTaskList}/>
            </div>
        </>
    )
}

export default ToDo;