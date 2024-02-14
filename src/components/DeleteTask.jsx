const DeleteTask = ({task, taskList, setTaskList}) => {

    const handleDelete = () => {
        let taskIndex = taskList.indexOf(task);
        let newTasklist = [...taskList]
        newTasklist.splice(taskIndex, 1)
        setTaskList(newTasklist)
    } 

    return (
        <>
            <div className="w-full flex justify-center">
            <button className="bg-red-500 text-white hover:opacity-50 py-1 px-4 rounded"
                onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}

export default DeleteTask;