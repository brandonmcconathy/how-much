export default function moneyCalc(times, rate) {
  const { start, lunch, endLunch, endWork } = times
  const currTime = Date.now() / 1000

  if (lunch == '') {
    const money = (currTime - start) * (rate / 3600)
    return money.toFixed(4)
  } else if (endLunch == '') {
    const money = (lunch - start) * (rate / 3600)
    return money.toFixed(4)
  } else if (endWork == '') {
    const money = ((lunch - start) + (currTime - endLunch)) * (rate / 3600)
    return money.toFixed(4)
  } else {
    const money = ((lunch - start) + (endWork - endLunch)) * (rate / 3600)
    return money.toFixed(4)
  }
}