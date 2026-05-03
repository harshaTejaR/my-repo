export function button(resetCounter){
  const button = document.getElementById('pushable')
  button.addEventListener("click", () => {
    console.log("Button Clicked")
    resetCounter()
  })

const chessBoard = (size) => {
  let board = ''
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 === 0) {
        board += ' '
      } else {
        board += '#'
      }
    }
    board += '\n'
  }
  console.log(board)
}
chessBoard(8) 



}

