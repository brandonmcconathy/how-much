'use client'

import { setDoc, doc } from "firebase/firestore"
import { db } from '../../lib/firebase'

import { useState } from "react"

export default function Home() {

  const [rate, setRate] = useState('')

  const handleChange = (event: any) => {
    setRate(event.target.value)
  }

  const startShift = async () => {
    await setDoc(doc(db, 'data', 'rate'), {rate: Number(rate)})
    setRate('')
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
      <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Hourly Rate" value={rate} onChange={handleChange} required />
      <div className="flex flex-col items-center gap-5 text-lg font-semibold">
        <button onClick={startShift} className="bg-blue-300 px-4 py-2 rounded-xl">Start Shift</button>
        <button onClick={startMeal} className="bg-blue-300 px-4 py-2 rounded-xl">Start Meal</button>
        <button onClick={endMeal} className="bg-blue-300 px-4 py-2 rounded-xl">End Meal</button>
        <button onClick={endShift} className="bg-blue-300 px-4 py-2 rounded-xl">End Shift</button>
      </div>
    </main>
  )
}
