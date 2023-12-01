'use client'

import { setDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import { db } from '../../lib/firebase'
import { useState, useEffect } from "react"
import moneyCalc from '../../utils/moneycalc'

export default function Home() {

  const [rate, setRate] = useState('')
  const [times, setTimes] = useState({start: '', lunch: '', endLunch: ''})
  const [money, setMoney] = useState(0)

  useEffect(() => {
    const getDBData = async () => {
      const timesSnap = await getDoc(doc(db, 'data', 'times'))
      const rateSnap = await getDoc(doc(db, 'data', 'rate'))
      const tempTimes = timesSnap.data()
      const tempRate = rateSnap.data().rate
      setTimes(tempTimes)
      setRate(tempRate)
      console.log(tempTimes)
      setMoney(moneyCalc(tempTimes, tempRate))
    }
    getDBData()
  }, [])

  const handleChange = (event: any) => {
    setRate(event.target.value)
  }

  const startShift = async () => {
    await setDoc(doc(db, 'data', 'rate'), {rate: Number(rate)})
    await updateDoc(doc(db, 'data', 'times'), {start: Math.floor(Date.now() / 1000), lunch: '', endLunch: ''})
    setRate('')
  }

  const startMeal = async () => {
    await updateDoc(doc(db, 'data', 'times'), {lunch: Math.floor(Date.now() / 1000)})
  }

  const endMeal = async () => {
    await updateDoc(doc(db, 'data', 'times'), {endLunch: Math.floor(Date.now() / 1000)})
  }

  const endShift = () => {
    
  }

  return (
    <main className="flex flex-col items-center my-10 gap-16 text-white">
      <h1 className="text-3xl font-semibold">How Much Have I Made</h1>
      <h2 className="text-3xl">{money}</h2>
      <input className="bg-green-700 px-4 py-2 rounded-xl box-pop" placeholder="Hourly Rate" value={rate} onChange={handleChange} required />
      <div className="flex flex-col items-center gap-5 text-lg font-semibold">
        <button id="start-shift" onClick={startShift} className="bg-green-700 px-4 py-2 rounded-xl">Start Shift</button>
        <button id="start-meal" onClick={startMeal} className="bg-green-700 px-4 py-2 rounded-xl">Start Meal</button>
        <button id="end-meal" onClick={endMeal} className="bg-green-700 px-4 py-2 rounded-xl">End Meal</button>
        <button id="end-shift" onClick={endShift} className="bg-green-700 px-4 py-2 rounded-xl">End Shift</button>
      </div>
    </main>
  )
}
