export default function timeCalc(times) {
  const { start, lunch, endLunch, endWork } = times
  const currTime = Date.now() / 1000

  if (lunch == '') {
    const time = (currTime - start) * 3600
    return time.toFixed(2)
  } else if (endLunch == '') {
    const time = (lunch - start) * 3600
    return time.toFixed(2)
  } else if (endWork == '') {
    const time = ((lunch - start) + (currTime - endLunch)) * 3600
    return time.toFixed(2)
  } else {
    const time = ((lunch - start) + (endWork - endLunch)) * 3600
    return time.toFixed(2)
  }
}