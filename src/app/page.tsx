'use client'

export default function Home() {



  const startShift = () => {

  }

  const startMeal = () => {
    
  }

  const endMeal = () => {
    
  }

  const endShift = () => {
    
  }

  return (
    <main className="flex flex-col items-center my-10 gap-16">
      <h1 className="text-3xl font-semibold">How Much Have I Made</h1>
      <h2 className="text-3xl">Money</h2>
      <div className="flex flex-col items-center">
        <button onClick={startShift}>Start Shift</button>
        <button onClick={startMeal}>Start Meal</button>
        <button onClick={endMeal}>End Meal</button>
        <button onClick={endShift}>End Shift</button>
      </div>
    </main>
  )
}
