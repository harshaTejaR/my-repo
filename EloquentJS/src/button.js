export function button(label, onClick) {
  const button = document.createElement('button')
  button.textContent = label
  button.addEventListener('click', onClick)
  return button
}