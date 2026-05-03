export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
  console.log('Counter setup complete')
  
  return () => setCounter(0)


  let char = ''
  for (let i = 0; i < 5; i++) {
    console.log(char += '#')

  }
  const minMax = (min, max) => {
    if (min > max) {
      return { min: max, max: min }
    } else {
      return { min, max }
    }
  }
  console.log(minMax(5, 3))

  // const chessBoard = (size) => {
  //   let board = ''
  //   for (let y = 0; y < size; y++) {
  //     for (let x = 0; x < size; x++) {
  //       if ((x + y) % 2 === 0) {
  //         board += ' '
  //       } else {
  //         board += '#'
  //       }
  //     }
  //     board += '\n'
  //   }
  //   console.log(board)
  // }
  // chessBoard(8) 
}