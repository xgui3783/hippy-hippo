import { HippyHippo } from './hippy-hippo-esm.js'
function generateNewName() {
  const newName = HippyHippo.getNickName()
  const container = document.querySelector('#container')
  container.innerHTML += `<br>${newName}`
}
const btn = document.querySelector('#button')
btn.addEventListener('click', generateNewName)