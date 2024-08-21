import { useAppSelector } from "../App/Hooks";

function Home() {
  const count = useAppSelector((state)=>state.counter.value)
  return (
    <div className="text-6xl h-[calc(100vh-54.4px)] flex flex-col justify-center items-center">
      {count}
    </div>
  )
}

export default Home