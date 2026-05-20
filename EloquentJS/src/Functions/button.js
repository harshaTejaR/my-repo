export function button(resetCounter){
  const button = document.getElementById('pushable')
  button.addEventListener("click", () => {
    console.log("Button Clicked")
    resetCounter()
  })
  }