

export default function Home() {
  return (
    <main className="flex flex-col items-center my-10 gap-16">
      <h1 className="text-3xl font-semibold">How Much Have I Made</h1>
      <h2 className="text-3xl">Money</h2>
      <div className="flex flex-col items-center">
        <button>Start Shift</button>
        <button>Start Meal</button>
        <button>End Meal</button>
        <button>End Shift</button>
      </div>
    </main>
  )
}
