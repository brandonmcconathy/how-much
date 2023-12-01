export default function moneyCalc(times, rate) {
  const { start, lunch, endLunch } = times
  const currTime = Date.now() / 1000

  if (lunch == '') {
    return (currTime - start) * (rate / 3600)
  } else if (endLunch == '') {
    return (lunch - start) * (rate / 3600)
  } else {
    return ((lunch - start) + (currTime - endLunch)) * (rate / 3600)
  }
    
  
}