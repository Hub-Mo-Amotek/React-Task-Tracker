import AddTask from "./components/AddTask"

function App() {

  return (
    <div className="flex flex-col items-center m-8">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Task Tracker</h1>
      <div className="flex flex-row items-center justify-center">
      <p className="text-xl pl-6">Click </p>
      <AddTask />
      <p className="text-xl my-2"> to add a new task!</p>
      </div>
    </div>
  )
}

export default App
