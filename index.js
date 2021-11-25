function mapToNegativize(sArray) {
  let r = []
  for (let i = 0; i < sArray.length; i++ ) {
    r.push(-1 * sArray[i])
  }
  return r
}

function mapToNoChange(sArray) {
  let r = []
  for (let i = 0; i < sArray.length; i++ ) {
    r.push(sArray[i])
  }
  return r
}

function mapToDouble(sArray) {
  let r = []
  for (let i = 0; i < sArray.length; i++ ) {
    r.push(2 * sArray[i])
  }
  return r
}

function mapToSquare(sArray) {
  let r = []
  for (let i = 0; i < sArray.length; i++ ) {
    r.push(sArray[i] * sArray[i])
  }
  return r
}

function reduceToTotal(sArray, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < sArray.length; i++ ) {
    total = total + sArray[i]
  }
  return total
}

function reduceToAllTrue(sArray) {
  for (let i = 0; i < sArray.length; i++ ) {
    if (!sArray[i]) return false
  }
  return true
}

function reduceToAnyTrue(sArray) {
  for (let i = 0; i < sArray.length; i++ ) {
    if (sArray[i]) return true
  }
  return false
}

