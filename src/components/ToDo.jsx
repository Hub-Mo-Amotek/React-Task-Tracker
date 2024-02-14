import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import { useEffect, useState } from "react";

const ToDo = ({task, taskList, setTaskList}) => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10)
            }, 10)
        }else if (!running) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [running])

    return (
        <>
            <div className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-sm">
                <div className="w-full flex flex-row justify-between">
                    <p className="font-semibold text-xl">{task.projectName}</p>
                    <EditTask task={task} taskList={taskList} setTaskList={setTaskList}/>
                </div>
                <p className="text-lg py-2">{task.taskDescription}</p>
                <div className="w-full flex flex-row items-center justify-evenly gap-4">
                    <div className="w-1/3 text-xl font-semibold py-4">
                        <span>{("0" + Math.floor((
                            time / 3600000 ) % 24 ))}:
                        </span>
                        <span>{("0" + Math.floor((
                            time / 600000 ) % 60 ))}:
                        </span>
                        <span>{("0" + Math.floor((
                            time / 1000 ) % 60 ))}:
                        </span>
                        <span className="text-sm">{("0" + (
                            time / 10 ) % 100 )}
                        </span>
                    </div>
                    <div>
                        { running ? (
                            <button className="bg-red-300 hover:opacity-70 text-gray-800 font-bold py-1 px-4 rounded-l"
                                    onClick={()=> setRunning(false)}>
                                Stop
                            </button>
                        ) : (
                            <button className="bg-green-300 hover:opacity-70 text-gray-800 font-bold py-1 px-4 rounded-l"
                                    onClick={()=> setRunning(true)}>
                                Start
                            </button>
                        )}
                        <button className="bg-gray-300 hover:opacity-70 text-gray-800 font-bold py-1 px-4 rounded-r"
                                onClick={()=> setTime(0)}>
                            Reset
                        </button>
                    </div>
                </div>
                <DeleteTask task={task} taskList={taskList} setTaskList={setTaskList}/>
            </div>
        </>
    )
}

export default ToDo;