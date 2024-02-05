import {useState} from "react";

const AddTask = () => {
const [addModal, setAddModal] = useState(false)
  return (
    <div>
      <button 
        className="mx-2.5 bg-blue-500 text-white uppercase text-sm font-semibold py-1 pl-2 pr-2.5 rounded hover:opacity-70 "
        type="button"
        onClick={() => setAddModal(true)}>+</button>
        {addModal ? (
            <>
            <div>
                <div>
                    <h3 className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
                        MODAL
                    </h3>
                    <button className="px-1 text-gray-400 float-right text-3xl leading-none font-semibold block">
                        x
                    </button>
                </div>
            </div>
            </>
        ) : null}
    </div>
  )
}

export default AddTask

